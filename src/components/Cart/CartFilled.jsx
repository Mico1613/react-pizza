import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import shoppingCart from "../../assets/cart/shopping-cart.png";
import resetCart from "../../assets/cart/reset-cart.svg";
import CartBlock from "./CartBlock";
import { useSelector, useDispatch } from "react-redux";
import { removeCartBlock, plusCartBlock, minusCartBlock} from "../../redux/actions/cart";

function CartFilled() {
  const dispatch = useDispatch();
  const onClearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  const { totalPrice, totalAmount, items } = useSelector(({ cart }) => cart);
  const addedPizzasGroup = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const onDeleteBlock = (id) => {
    dispatch(removeCartBlock(id));
  };
  const onPlusBlock = (id) => {
    dispatch(plusCartBlock(id))
  }
  const onMinusBlock = (id) => {
    dispatch(minusCartBlock(id))
  }
  return (
    <div className="cart">
      <div className="cart__filled">
        <div className="cart-header">
          <div className="logo">
            <img src={shoppingCart} alt="" />
            <h3>Корзина</h3>
          </div>
          <button onClick={onClearCart} className="clear">
            <img src={resetCart} alt="" />
            <span>Очистить корзину</span>
          </button>
        </div>
        <div className="cart-items">
          {addedPizzasGroup.map((item) => (
            <CartBlock
              key={item.id}
              name={item.name}
              type={item.type}
              size={item.size}
              id={item.id}
              totalPrice={items[item.id].totalPrice}
              onDeleteBlock={onDeleteBlock}
              onPlusBlock={onPlusBlock}
              onMinusBlock={onMinusBlock}
            />
          ))}
        </div>
        <div className="result">
          <div className="quantity">
            Всего пицц: <p>{totalAmount} шт.</p>
          </div>
          <div className="sum">
            Сумма заказа: <p>{totalPrice}₽</p>
          </div>
        </div>
        <div className="cart-buttons">
          <Link to="/react-pizza">
            <button className="on-main">Вернуться назад</button>
          </Link>
          <button className="to-pay">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}

export default CartFilled;
