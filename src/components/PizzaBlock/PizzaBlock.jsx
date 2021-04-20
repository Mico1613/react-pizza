import React from "react";
import "./PizzaBlock.scss";
import Pizza from "../Pizza/Pizza";
import PizzaLoader from "../Pizza/PizzaLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../../redux/actions/pizzas";

function PizzaBlock() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const handleAddPizza = (obj) => {
    dispatch({
      type: 'ADD_PIZZA',
      payload: obj
    });
  };

  return (
    <div className="pizzaBlock">
      <p>Все пиццы</p>
      <div className="pizzaBlock__flex">
        {isLoaded
          ? items.map((pizza) => (
              <Pizza key={pizza.id} pizza={pizza} handleAddPizza={handleAddPizza} addedPizzasAmount={cartItems[pizza.id] && cartItems[pizza.id].items.length} />
            ))
          : Array(10)
              .fill(0)
              .map((item, index) => <PizzaLoader key={index} />)}
      </div>
    </div>
  );
}

export default PizzaBlock;
