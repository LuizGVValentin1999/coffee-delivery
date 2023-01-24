import {  Titulo, Description, Container, CoffeeImg, Tags, SpanTags, Buy, Counter, BuyButton, ValueBox, Coin, Value,CouterButton } from "./styles";
import { ShoppingCart,Plus,Minus  } from 'phosphor-react'
import { useState } from "react";

export function CoffeeItem({key = '',img = '',tags,valor = '',cardTitulo = '',description = ''})  {
    const [quantity, setQuantity] = useState(1);

    
    function handleAdd() {
        setQuantity(state => state + 1);
    }

    function handleMinus() {
        if(quantity>1){
            setQuantity(state => state - 1);
        }
    }


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
                <CouterButton onClick={handleMinus}>
                    <Minus  size={14} weight="fill" />
                </CouterButton>
                <div>
                    <span>{quantity}</span>
                </div>
                <CouterButton onClick={handleAdd}>
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
  