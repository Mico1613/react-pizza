import React from "react";
import "./PizzaBlock.scss";
import Pizza from "../Pizza/Pizza";
import PizzaLoader from "../Pizza/PizzaLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../../redux/actions/pizzas";

function PizzaBlock() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filters }) => filters);
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  return (
    <div className="pizzaBlock">
      <p>Все пиццы</p>
      <div className="pizzaBlock__flex">
        {isLoaded
          ? items.map((pizza) => (
              <Pizza isLoaded={true} key={pizza.id} pizza={pizza} />
            ))
          : Array(10)
              .fill(0)
              .map((item, index) => <PizzaLoader key={index} />)}
      </div>
    </div>
  );
}

export default PizzaBlock;
