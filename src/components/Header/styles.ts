import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width:  70rem;
  padding: 2rem;
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
  color: ${(props) => props.theme['orange-700']};
  background: ${(props) =>props.theme['orange-200']};
`;