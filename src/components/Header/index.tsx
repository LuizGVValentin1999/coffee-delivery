import { Container, Logo, Local, Carrinho, Conjunto, Entrega } from "./styles";
import { ShoppingCart,MapPin } from 'phosphor-react'
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
export  function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <Conjunto>
        <Local>
          <MapPin weight="fill" />
          <Entrega>Entrega em Campo Largo</Entrega>
        </Local>

        <Carrinho>
          <Link to="/entregaPedido">
            <ShoppingCart  weight="fill"/>
          </Link>
        </Carrinho>
      </Conjunto>
    </Container>
  );
}