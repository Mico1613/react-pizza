import React from "react";
import "./PizzaBlock.scss";
import Pizza from "../Pizza/Pizza";
import { useSelector} from "react-redux";

function PizzaBlock() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  return (
    <div className="pizzaBlock">
      <p>Все пиццы</p>
      <div className="pizzaBlock__flex">
        {items &&
          items.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />)}
      </div>
    </div>
  );
}

export default PizzaBlock;
