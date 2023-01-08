import { Titulo  } from "./styles";
import { Body } from "../../../../styles/global";
import { CoffeeItem } from "../CoffeeItem";


export function CoffeeList()  {

    return (
        <Body>
             <Titulo>Nossos cafés</Titulo>
             <div>
                <CoffeeItem/>
             </div>
        </Body>
       
    )
  }
  