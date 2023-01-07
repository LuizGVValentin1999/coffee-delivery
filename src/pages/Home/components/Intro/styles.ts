import styled from "styled-components";
import backgroud from "./../../../../assets/Background-intro.png";

export const Background = styled.div`
background-image: url(${backgroud});
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    max-width:  70rem;
    padding-top: 4rem;
    justify-content: space-between;
    flex-direction: row;
`;

export const Titulo = styled.div`
    max-width: 36.78rem;
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 4rem; 
`;


export const SubTitulo = styled.div`
    margin-top: 1rem ;
    max-width: 36.78rem;
    font-size: 1.25rem;
    line-height: 1.5rem; 
`;

export const Items = styled.div`
    max-width: 36.78rem;
    margin-top: 3rem ;
    margin-bottom: 10rem ;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;

`;


export const Item = styled.div`
`;



export const Img = styled.img`
`;

