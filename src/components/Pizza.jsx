import React from "react";
import "./Pizza.scss";
import plus from "../assets/plus.png";

function Pizza({ pizza }) {
  return (
    <div className="pizza">
      <div className="pizza__img">
        <img src={pizza.imageUrl} alt="#" />
      </div>
      <span>{pizza.name}</span>
      <div className="pizza__variation">
        <ul className="pizza__types">
          <li className="pizza__choose thin choosen">тонкое</li>
          <li className="pizza__choose tradition disabled">традиционное</li>
        </ul>
        <ul className="pizza__sizes">
          <li className="pizza__choose size">26 см</li>
          <li className="pizza__choose size choosen">30 см</li>
          <li className="pizza__choose size">40 см</li>
        </ul>
      </div>
      <div className="pizza__purchase">
        <div className="pizza__price">от {pizza.price} ₽</div>
        <button className="pizza__add"> <img src={plus} alt=""/> Добавить</button>
      </div>
    </div>
  );
}

export default Pizza;
