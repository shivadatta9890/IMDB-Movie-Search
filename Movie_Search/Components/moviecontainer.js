import React from 'react'
import styled from 'styled-components';

const MovieComponent = styled.div`
display:flex;
flex-direction:column;
padding:10px;
cursor:pointer;
width:280px;
box-shadow:0 3px 10px 0 #aaa;
`;

const Movieimage = styled.img`
height:365px;
object-fit:cover;

`;

const Moviename = styled.span`
font-size:18px;
color:#333;
font-weight:600;
overflow:hidden;
margin:15px 0;
text-overflow: ellipsis;
white-space:nowrap;
`;

const Infodiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`;
const Movieinfo = styled.span`
    font-size:15px;
    color:#333;
    font-weight:500;

    `;
const Moviescontainer = (props) => {
    const {Title,Year,imdbID,Type,Poster} = props.movie;
  return (
    <MovieComponent onClick={()=> props.setSelectedMovie(imdbID)}>
        <Movieimage src= {Poster}/>
        <Moviename>{Title}</Moviename>
        <Infodiv>
            <Movieinfo>Year: {Year}</Movieinfo>
            <Movieinfo>Type: {Type}</Movieinfo>
        </Infodiv>
        </MovieComponent>
  )
}

export default Moviescontainer