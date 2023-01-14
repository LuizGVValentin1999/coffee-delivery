import {  Titulo, Description, Container, CoffeeImg, Tags, SpanTags, Buy, Counter, BuyButton, ValueBox, Coin, Value,CouterButton } from "./styles";
import { ShoppingCart,Plus,Minus  } from 'phosphor-react'
import coffee from "./../../../../assets/coffees/americano.png";

export function CoffeeItem({key = '',img = '',tags,valor = '',cardTitulo = '',description = ''})  {

    return (
       <Container key={key}>
        <CoffeeImg src={img} />
        <Tags>
            {tags?.map((tag) => (
            <SpanTags key={tag} >{tag}</SpanTags>
            ))}
        </Tags>
        <Titulo>{cardTitulo}</Titulo>
        <Description>{description}</Description>
        <Buy>
            <ValueBox><Coin>R$</Coin><Value>{valor}</Value></ValueBox>
            <Counter>
                <CouterButton>
                    <Minus  size={14} weight="fill" />
                </CouterButton>
                <div>
                    <span>0</span>
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
  