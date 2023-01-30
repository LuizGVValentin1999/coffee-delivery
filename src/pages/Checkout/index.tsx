import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { Body } from "../../styles/global";
import {  Checkoutbox, 
          DivContainer, 
          DivContainerSelect, 
          Titulo, 
          IconBox,
          TextIcon, 
          TituloIcon , 
          SubTituloIcon, 
          InputStyleContainer, 
          InputStyled, 
          CepInput, 
          RuaInput, 
          ComplementoInput, 
          FormContainer,
          ButtonConfirm, 
          PaySpace, 
          PayDiv,
          CoffeSelectBox,
          CoffeeImg,
          CoffeBody,
          CoffeHead,
          Coffebox,
          CoffePrice,
          Counter,
          CouterButton,
          RemoverButton
         } from "./styles";
import React from "react";



export function Checkout() {

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
    <Body>
      <Checkoutbox>
        <div>
          <Titulo> Complete seu pedido</Titulo>
          <DivContainer>
            <IconBox>
              <MapPinLine size={22}  />
              <TextIcon>
                <TituloIcon>Endereço de Entrega</TituloIcon>
                <SubTituloIcon>Informe o endereço onde deseja receber seu pedido</SubTituloIcon>
              </TextIcon>
            </IconBox>
            <FormContainer>
              <CepInput>
                <InputStyleContainer>
                  <InputStyled placeholder="CEP"/>
                </InputStyleContainer>
              </CepInput>
             <RuaInput>
                <InputStyleContainer>
                  <InputStyled placeholder="Rua"/>
                </InputStyleContainer>
             </RuaInput>
              <InputStyleContainer>
                <InputStyled placeholder="Número"/>
              </InputStyleContainer>
              <ComplementoInput>
                <InputStyleContainer>
                  <InputStyled placeholder="Complemento"/>
                </InputStyleContainer>
              </ComplementoInput>
              <InputStyleContainer>
                <InputStyled placeholder="Bairro"/>
              </InputStyleContainer>
              <InputStyleContainer>
                <InputStyled placeholder="Cidade"/>
              </InputStyleContainer>
              <InputStyleContainer>
                <InputStyled placeholder="UF"/>
              </InputStyleContainer>
            </FormContainer>
            </DivContainer>
          <DivContainer> 
            <IconBox>
              <CurrencyDollar size={22}  />
              <TextIcon>
                <TituloIcon>Endereço de Entrega</TituloIcon>
                <SubTituloIcon>Informe o endereço onde deseja receber seu pedido</SubTituloIcon>
              </TextIcon>
            </IconBox>
            
            <div>
              <div>
                <div></div>
                <div>Cartão de crédito</div>
              </div>
              <div>
                <div></div>
                <div>cartão de débito</div>
              </div>
              <div>
                <div></div>
                <div>dinheiro</div>
              </div>
            </div>

          </DivContainer>
        </div>
        <div>
          <Titulo>Café selecionados</Titulo>
          <DivContainerSelect>
            <CoffeSelectBox>
            <CoffeeImg src='/src/assets/coffees/expresso.png' />
            <CoffeBody>
              <CoffeHead>
                <div>Tradicional</div>
                <CoffePrice>R$ 9,50</CoffePrice>
              </CoffeHead>
              <Coffebox>
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
            <RemoverButton>
              <Trash size={24} color="#5839f5" />
               <div>Remover</div>
            </RemoverButton>
              </Coffebox>
            </CoffeBody>
            </CoffeSelectBox> 
            <PaySpace>
              <PayDiv>
                <div>Total de itens</div>
                <div>R$ 29,70</div>
              </PayDiv>
              <PayDiv>
                <div>Entrega</div>
                <div>R$ 3,50</div>
              </PayDiv>
              <PayDiv >
                <div className="total" >Total</div>
                <div className="total">R$ 3,50</div>
              </PayDiv>
            </PaySpace>
            <ButtonConfirm>confirmar pedido</ButtonConfirm>
          </DivContainerSelect>
        </div>
      </Checkoutbox>
    </Body>
  );
}
