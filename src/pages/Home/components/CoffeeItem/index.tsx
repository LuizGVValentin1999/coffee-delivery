import {  Titulo, Description, Container, CoffeeImg, Tags, SpanTags, Buy, Counter, BuyButton, ValueBox, Coin, Value,CouterButton } from "./styles";
import { ShoppingCart,Plus,Minus  } from 'phosphor-react'
import coffee from "./../../../../assets/coffees/americano.png";

export function CoffeeItem()  {

    return (
       <Container>
        <CoffeeImg src={coffee} />
        <Tags>
            <SpanTags>Tradicional</SpanTags>
            <SpanTags>Com leite</SpanTags>
        </Tags>
        <Titulo>Café com Leite</Titulo>
        <Description>Meio a meio de expresso tradicional com leite vaporizado</Description>
        <Buy>
            <ValueBox><Coin>R$</Coin><Value>9,90</Value></ValueBox>
            <Counter>
                <CouterButton>
                    <Minus  size={14} weight="fill" />
                </CouterButton>
                <div>
                    <span>1</span>
                </div>
                <CouterButton>
                    <Plus  size={14} weight="fill" />
                </CouterButton>
            </Counter>
            <BuyButton>
                <ShoppingCart size={22} weight="fill" />
            </BuyButton>
        </Buy>
       </Container>
       
    )
  }
  