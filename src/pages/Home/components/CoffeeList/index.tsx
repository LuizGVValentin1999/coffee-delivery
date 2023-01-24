import { Titulo,ListBox  } from "./styles";
import { Body } from "../../../../styles/global";
import { CoffeeItem } from "../CoffeeItem";
import { coffees } from "../../../../dados/dados";

const dados = coffees;
  

export function CoffeeList()  {

    return (
        <Body>
             <Titulo>Nossos cafés</Titulo>
           
             <ListBox>
             {dados?.map((item) => (
                <CoffeeItem
                key={item.id}
                img={item.srcImg}
                tags={item.tags}
                valor={item.price}
                cardTitulo={item.title}
                description={item.description}
                />
                
              ))}
             </ListBox>
        </Body>
       
    )
  }
  