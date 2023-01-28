import styled from "styled-components";



export const Checkoutbox = styled.div`
    display: flex;
    padding-top: 3rem;
    gap: 1rem;

`;

export const DivContainer  = styled.div`
    background:  ${(props) =>props.theme['white-200']};
    padding: 3rem;
    margin-bottom: 1rem;
    border-radius: 15px;
`;

export const Titulo = styled.div`
    font-size: 1.3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 4rem; 
`;

export const IconBox = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 3rem;
    svg{
        color: ${(props) => props.theme['yellow-800']};
    }
`;

export const TextIcon = styled.div`
    display: flex;
    flex-direction: column
`;


export const TituloIcon = styled.span`
line-height: 1.3rem; 

`;

export const SubTituloIcon = styled.span`
    font-size: 0.8rem; 
`;


export const InputStyleContainer  = styled.div`
height: 2.625rem;
 border-radius: 4px;
 border: 1px solid ${(props) => props.theme['gray-100']};
 background: ${(props) => props.theme['gray-300']};
 transition: 0.4s;
 display: flex;
 align-items: center;
 justify-content: space-between;
 overflow: hidden;
`;

export const InputStyled = styled.input`
 flex: 1;
 background: none;
 border: none;
 height: 100%;
 color: ${(props) => props.theme['gray-400']};
 font-size: 0.75rem;
 padding: 0 0.75rem;
 &::placeholder {
    color: ${(props) => props.theme['gray-400']};
 }
`

export const FormContainer = styled.form `
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    gap: 1rem 0.75rem;
    grid-auto-flow: dense;
`

export const CepInput = styled.div `
    grid-column: span 3 / auto;
    max-width: 12.5rem;
`

export const RuaInput = styled.div `
    grid-column: span 3 / auto;
`

export const ComplementoInput = styled.div `
    grid-column: span 2 / auto;
`

export const ButtonConfirm = styled.button `
    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['white']};;
    padding: 0.75rem 2.8rem;
    font-weight: 700;
    font-size: 0.875rem;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: all 0.4s ease 0s;
    margin-top: 0.7rem;
`

export const PaySpace = styled.section `
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    `

export const PayDiv = styled.div `
    display: flex;
    justify-content: space-between;
    .total{
        font-weight: 800;
        font-size: 1.2rem;
    }
    `

export const CoffeSelectBox = styled.div `
    display: flex;
    justify-content: space-between;
    .total{
        font-weight: 800;
        font-size: 1.2rem;
    }
`

export const CoffeeImg = styled.img`
    margin-top: calc(-5px - 1rem);
    width: 5rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
`;

export const CoffeBody = styled.div`
`

export const CoffeHead = styled.div`
    display: flex;
    width: 15rem;
    justify-content: space-between;
`

export const Coffebox = styled.div`
    display: flex;
    width: 15rem;
    justify-content: space-between;
`