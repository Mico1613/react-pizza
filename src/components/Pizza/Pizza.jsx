import React from "react";
import "./Pizza.scss";
import plus from "../../assets/plus.png";
import classNames from "classnames";


function Pizza({ pizza }) {

  const [pizzaType, setPizzaType] = React.useState(pizza.types[0]);
  const selectPizzaType = (index) => {
    setPizzaType(index);
  };
  const [pizzaSize, setPizzaSize] = React.useState(0);
  const selectPizzaSize = (index) => {
    setPizzaSize(index);
  };
  const pizzaTypes = ["тонкое", "традиционное"];
  const pizzaSizes = ["26", "30", "40"];
  
  return (
    <div className="pizza">
      <div className="pizza__img">
        <img src={pizza.imageUrl} alt="#" />
      </div>
      <span>{pizza.name}</span>
      <div className="pizza__variation">
        <ul>
          {pizzaTypes.map((type, index) => (
            <li
              key={`${type}_${index}`}
              onClick={() => selectPizzaType(index)}
              className={classNames("", {
                choosen: pizzaType === index,
                disabled: !pizza.types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {pizzaSizes.map((size, index) => (
            <li
              key={`${size}_${index}`}
              onClick={() => selectPizzaSize(index)}
              className={classNames("", {
                choosen: pizzaSize === index && pizza.sizes.includes(+size),
                disabled: !pizza.sizes.includes(+size),
              })}
            >
              {size}см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza__purchase">
        <div className="price">от {pizza.цене} ₽</div>
        <button className="add">
          <img src={plus} alt="" /> Добавить
        </button>
      </div>
    </div>
  );
}

export default Pizza;
