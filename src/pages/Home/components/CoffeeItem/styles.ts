import styled from "styled-components";


export const Container = styled.div`
    border-radius: 8px 50px 8px 50px;
    background:  ${(props) =>props.theme['white-200']};
    height: 19.375rem;
    text-align: center;
    margin:  3rem 0 0.5rem 0;
`;

export const Tags = styled.div`
    margin: 0.5rem;
`;

export const SpanTags = styled.span`
    background:  ${(props) =>props.theme['yellow-200']};
    color:  ${(props) =>props.theme['yellow-800']};
    font-size: 0.625rem;
    padding: 5px 10px;
    border-radius: 15px;
    font-weight: bold;
    margin: 0.1rem;
    text-transform: uppercase;
`;


export const Titulo = styled.div`
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 2.8rem; 
`;


export const Description = styled.div`
    font-size: 0.875rem;
    color:  ${(props) =>props.theme['gray-400']};
    margin: 0.2rem 1.25rem 0 1.25rem;
`;


export const CoffeeImg = styled.img`
    margin-top: calc(-5px - 1rem);
`;


export const Buy = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
`;

export const Counter = styled.div`
    display: flex;
    height: 3rem;
    background:  ${(props) =>props.theme['gray-100']};
    border-radius: 8px;
    margin: 0 0.5rem 0 0;
    align-items: center;
    justify-content: space-around;
`;

export const CouterButton = styled.button`
   color: ${(props) =>props.theme['blue-500']};
   background:  ${(props) =>props.theme['gray-100']};
   :focus{
    outline: none;
    box-shadow: 0 0 0;
   }
`;


export const BuyButton = styled.button`
    background:  ${(props) =>props.theme['blue-700']};
    color:  ${(props) =>props.theme['white']};
`;


export const ValueBox = styled.span`
     margin: 0 1.5rem 0 1.5rem;
`;


export const Coin = styled.span`
    font-size: 0.8rem ;
    margin: 0.2rem;
`;


export const Value = styled.span`
    font-size: 1.5rem ;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
`;


