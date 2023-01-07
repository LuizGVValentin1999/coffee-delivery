import { createGlobalStyle } from 'styled-components'
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
    width: 100vw;
    height: 100vh;
    justify-content:center;
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
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

