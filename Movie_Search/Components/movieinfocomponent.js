import React, { useEffect , useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY } from '../movie';
const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
padding:20px 30px;
`;
const Movieimg = styled.img`
object-fit:cover;
height:350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  
  border-radius:50%;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 15px;
  
  cursor: pointer;
  opacity: 0.8;
`;
const Movieinfocomponent = (props) => {
    const {selectedMovie} = props;
    const [movieInfo,setMovieInfo] = useState();
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
        .then((responce)=> setMovieInfo(responce.data));
    });
  return (
    <Container>
        {
        movieInfo ?
        <> 
        <Movieimg src={movieInfo?.Poster} />
        <InfoColumn>
            <MovieName>{movieInfo?.Type}: {movieInfo?.Title}</MovieName>
            <MovieInfo>IMDB Rating: <span>{movieInfo?.imdbRating}</span></MovieInfo>
            <MovieInfo>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfo>
        </InfoColumn>
        <Close onClick= {()=> props.setSelectedMovie()}>X</Close>
        </>
        :"Loading..."
        }
        </Container>
  )
}

export default Movieinfocomponent;