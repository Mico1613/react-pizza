import React from "react";
import "./PizzaBlock.scss";
import Pizza from "./Pizza";

function PizzaBlock({ obj }) {
  return (
    <div className="pizzaBlock">
      <p>Все пиццы</p>
      <div className="pizzaBlock__flex">
        {obj.map((pizza) => (
          <Pizza key={pizza.id} pizza = {pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaBlock;
