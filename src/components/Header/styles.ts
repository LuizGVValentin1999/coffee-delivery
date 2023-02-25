import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width:  70rem;
  padding-top: 2rem;
  justify-content: space-between;
  flex-direction: row;
`;

export const Conjunto = styled.div``;

export const Logo = styled.img`
  margin-right: 3rem;
`;

export const Entrega = styled.text`
  margin-left: 0.5rem;
`;

export const Local = styled.button`
  margin-right: 1rem;
  color: ${(props) => props.theme['blue-500']}};
  background: ${(props) => props.theme['blue-300']};
`;

export const Carrinho = styled.button`
  color: ${(props) => props.theme['yellow-800']};
  background: ${(props) =>props.theme['yellow-200']};
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  position: relative;
  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);  
    color: ${(props) =>props.theme['white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    background:  ${(props) =>props.theme['yellow-800']};
 }
`;

