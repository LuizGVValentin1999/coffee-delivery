import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 2rem;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
  }
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
  color: ${(props) => props.theme['orange-700']};
  background: ${(props) =>props.theme['orange-200']};
`;