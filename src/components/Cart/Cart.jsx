import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import CartImg from "../../assets/cart_img.png";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <h4>Корзина пустая 😕</h4>
        <p>
          Вероятно, вы ещё не заказывали пиццу. Для того, чтобы заказать пиццу,
          перейдите на главную страницу.
        </p>
        <img src={CartImg} alt="" />
        <Link to="/react-pizza">
          <button>
            <span>Вернуться назад</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
