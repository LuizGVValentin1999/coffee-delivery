import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Body } from "../../styles/global";
import {  Checkoutbox, 
          DivContainer, 
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
          CoffePrice
         } from "./styles";



export function Checkout() {
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
          <DivContainer>
            <CoffeSelectBox>
            <CoffeeImg src='/src/assets/coffees/expresso.png' />
            <CoffeBody>
              <CoffeHead>
                <div>Tradicional</div>
                <CoffePrice>R$ 9,50</CoffePrice>
              </CoffeHead>
              <Coffebox>
                <>- 0 +</>
                <>Remover</>
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
          </DivContainer>
        </div>
      </Checkoutbox>
    </Body>
  );
}
