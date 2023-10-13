import React ,{useState} from "react";
import styled from "styled-components";
import Moviescontainer from "./Components/moviecontainer";
import axios from 'axios';
import Movieinfocomponent from "./Components/movieinfocomponent";
export const API_KEY = 'a9118a3a';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  font-weight: bold;
  background: #333;
  color: #fff;
  padding: 10px;
  font-size: 25px;
  box-shadow: 0 3px 6px 0 #555;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Movieicon  = styled.img`
height:50px;
width:50px;
margin:15px;
`;
const Searchbox = styled.div`
display:flex;
flex-direction:row;
background:#fff;
padding:10px;
align-items:center;
width:50%;

margin-left:20px;
border-radius:7px;
`;

const Searchicon = styled.img`
height:32px;
width:32px;
`;

const SearchInput = styled.input`
color:#333;
font-size:16px;
font-weight:bold;
border:none;
outline:none;
margin-left:15px;
`;

const MovieListcontainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
gap:10px;
justify-content:space-evenly;

`;
const Demoimg = styled.img`
height:120px;
width:120px;
margin:150px;
opacity:50%;
`;
const Movie = () => {
    const [searchQuery,setSearchQuery] = useState();

    const [timeoutId,setTimeoutId] = useState();

    const [moviesList,setMoviesList] = useState([]);

    const [selectedMovie,setSelectedMovie] = useState();

    const fetchData = async (searchString)=>{
        const responce = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
        // console.log(responce);
        setMoviesList(responce.data.Search);
    }

    const onTextChange = (e)=>{
        clearTimeout(timeoutId);
        setSearchQuery(e.target.value);
        const timeout = setTimeout(()=> fetchData(e.target.value),500);
        setTimeoutId(timeout);

    }
  return (
    <>
      <Container>
        <Header>
          <AppName>
            <Movieicon src="\movie-icon.svg"/>
            React Movie App
            </AppName>
            <Searchbox>
                <Searchicon src="/search-icon.svg"/>
                <SearchInput placeholder="search movie" value={searchQuery} onChange = {onTextChange}/>
            </Searchbox>
        </Header>
        {selectedMovie && <Movieinfocomponent selectedMovie = {selectedMovie} setSelectedMovie = {setSelectedMovie}/>}
        <MovieListcontainer>
            {
                moviesList?.length?moviesList.map((movie,id)=> <Moviescontainer key={id} movie={movie} setSelectedMovie={setSelectedMovie}/>):<Demoimg src="/movie-icon.svg" />
            }
            {/* <Moviescontainer /> */}
            
        </MovieListcontainer>
      </Container>
    </>
  );
};
export default Movie;


// https://ayushkul.github.io/react-movie-app3333333333333333
