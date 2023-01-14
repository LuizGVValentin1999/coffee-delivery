import { Titulo,ListBox  } from "./styles";
import { Body } from "../../../../styles/global";
import { CoffeeItem } from "../CoffeeItem";

const dados = [
    {
      id: "1",
      title: "Expresso Tradicional",
      tags: ["Tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      srcImg: "/src/assets/coffees/expresso.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "2",
      title: "Expresso Americano",
      tags: ["Tradicional"],
      description: "Expresso diluído, menos intenso que o tradicional",
      srcImg: "/src/assets/coffees/americano.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "3",
      title: "Expresso Cremoso",
      tags: ["Tradicional"],
      description: "Café expresso tradicional com espuma cremosa",
      srcImg: "/src/assets/coffees/cremoso.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "4",
      title: "Expresso Gelado",
      tags: ["Tradicional", "Gelado"],
      description: "Bebida preparada com café expresso e cubos de gelo",
      srcImg: "/src/assets/coffees/gelado.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "5",
      title: "Café com Leite",
      tags: ["Tradicional", "Com Leite"],
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      srcImg: "/src/assets/coffees/leite.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "6",
      title: "Latte",
      tags: ["Tradicional", "Com Leite"],
      description:
        "Uma dose de café expresso, com o dobro de leite e espuma cremosa",
      srcImg: "/src/assets/coffees/latte.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "7",
      title: "Capuccino",
      tags: ["Tradicional", "Com Leite"],
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      srcImg: "/src/assets/coffees/capuccino.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "8",
      title: "Macchiato",
      tags: ["Tradicional", "Com Leite"],
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      srcImg: "/src/assets/coffees/macchiato.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "9",
      title: "Mocaccino",
      tags: ["Tradicional", "Com Leite"],
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      srcImg: "/src/assets/coffees/mocaccino.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "10",
      title: "Chocolate Quente",
      tags: ["Especial", "Com Leite"],
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      srcImg: "/src/assets/coffees/chocolate.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "11",
      title: "Cubano",
      tags: ["Especial", "Alcoólico", "Gelado"],
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      srcImg: "/src/assets/coffees/cubano.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "12",
      title: "Havaiano",
      tags: ["Especial"],
      description: "Bebida adocicada preparada com café e leite de coco",
      srcImg: "/src/assets/coffees/havaiano.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "13",
      title: "Árabe",
      tags: ["Especial"],
      description: "Bebida preparada com grãos de café árabe e especiarias",
      srcImg: "/src/assets/coffees/arabe.png",
      price: "9,90",
      amount: 0,
    },
    {
      id: "14",
      title: "Irlandês",
      tags: ["Especial", "Alcoólico"],
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      srcImg: "/src/assets/coffees/irlandes.png",
      price: "9,90",
      amount: 0,
    },
  ];

  

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
  