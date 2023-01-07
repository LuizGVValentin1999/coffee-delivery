import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  body {
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['gray-800']};
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0.4rem;
  }
  button{
  padding:0.7rem;
  border-radius: 0.4rem;
  display: inline-flex;
  cursor: pointer;
 }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}
 
`
export const Body = styled.div`
  width: 100%;
  justify-content:center;
  max-width: 70rem;
  margin:  auto;
  -webkit-font-smoothing: antialiased;
`
