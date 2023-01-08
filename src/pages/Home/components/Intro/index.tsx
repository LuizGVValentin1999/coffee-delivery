import { Background, Titulo, SubTitulo, Container, Items, Item,ItemIcon,ItemText, Img } from "./styles";
import { ShoppingCart,Timer,Package,Coffee } from 'phosphor-react'
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
                        <Item>
                            <ItemIcon iconColor="yellowDark">
                                <ShoppingCart  weight="fill" />
                            </ItemIcon>
                            <ItemText>
                                Compra simples e segura
                            </ItemText>
                        </Item>
                        <Item>
                            <ItemIcon  iconColor="gray">
                                <Package  weight="fill" />
                            </ItemIcon>
                            <ItemText>
                                Embalagem mantém o café intacto
                            </ItemText>
                        </Item>
                        <Item>
                            <ItemIcon  iconColor="yellow">
                                <Timer  weight="fill" />
                            </ItemIcon>
                            <ItemText>
                                Entrega rápida e rastreada
                            </ItemText>
                        </Item>
                        <Item>
                            <ItemIcon  iconColor="blue">
                                <Coffee  weight="fill" />
                            </ItemIcon>
                            <ItemText>
                                O café chega fresquinho até você
                            </ItemText>
                        </Item>
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
  