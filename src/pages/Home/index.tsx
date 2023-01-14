import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";




export function Home() {
  return (
    <div className="Home">
      <Intro />
        <CoffeeList/>
    </div>
  );
}
