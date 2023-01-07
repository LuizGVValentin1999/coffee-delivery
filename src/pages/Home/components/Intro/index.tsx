import { Background, Titulo, SubTitulo, Container, Items, Item, Img } from "./styles";
import coffeeImg from "./../../../../assets/coffee-img.svg";
import { Body } from "../../../../styles/global";


export function Intro()  {

    return (
        <Background>
            <Body>
                <Container >
                    <div>
                        <Titulo>Encontre o café perfeito para qualquer hora do dia</Titulo>
                        <SubTitulo>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitulo>
                        <Items>
                        <Item>Compra simples e segura</Item>
                        <Item>Embalagem mantém o café intacto</Item>
                        <Item>O café chega fresquinho até você</Item>
                        <Item>Entrega rápida e rastreada</Item>
                        </Items>
                      
                    </div>
                    <div>
                        <Img  src={coffeeImg} alt="logo" />
                    </div>
                </Container>
            </Body>
        </Background>
       
    )
  }
  