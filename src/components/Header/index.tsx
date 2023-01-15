import { Container, Logo, Local, Carrinho, Conjunto, Entrega } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "./../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Body } from "../../styles/global";
export function Header() {
  return (
    <Body>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>

        <Conjunto>
          <Local>
            <MapPin size={20} weight="fill" />
            <Entrega>Campo Largo, PR</Entrega>
          </Local>
          <Link to="/Checkout">
            <Carrinho>
              <ShoppingCart size={20} weight="fill" />
            </Carrinho>
          </Link>
        </Conjunto>
      </Container>
    </Body>
  );
}
