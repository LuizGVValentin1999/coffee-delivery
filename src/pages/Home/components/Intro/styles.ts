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
    display: grid;
    grid-template-columns: 17.5rem 19rem;

`;


export const Item = styled.div`
    display: flex;
    margin-bottom: 1rem ;
`;


export const ItemIcon = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0.3rem;
    margin-right: 0.6rem;
    background: rgb(196, 127, 24);
    color: rgb(250, 250, 250);
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const ItemText = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
`;




export const Img = styled.img`
`;

