import React from "react";
import "./Cart.scss";
import pizzaCart from "../../assets/cart/pizza-cart.png";
import { useSelector} from "react-redux";

function CartBlock({
  name,
  type,
  size,
  id,
  totalPrice,
  onDeleteBlock,
  onPlusBlock,
  onMinusBlock,
}) {
  const { items } = useSelector(({ cart }) => cart);
  const deleteBlock = () => {
    onDeleteBlock(id);
  };
  const plusBlock = () => {
    onPlusBlock(id);
  }
  const minusBlock = () => {
    onMinusBlock(id);
  }
  return (
    <div className="cart-block">
      <img src={pizzaCart} alt="" />
      <div className="pizza-kind">
        <div className="pizza-name">{name}</div>
        <p>
          <span>
            {type} тесто, {size} см
          </span>
        </p>
      </div>
      <div className="pizza-counter">
        <button onClick={minusBlock} className="cart-change">
          <div className="horizontal-line"></div>
        </button>
        <p>{items[id].items.length}</p>
        <button onClick={plusBlock} className="cart-change">
          <div className="horizontal-line"></div>
          <div className="vertical-line"></div>
        </button>
      </div>
      <div className="pizza-price">{totalPrice} ₽</div>
      <button onClick={deleteBlock} className="pizza-delete">
        <div className="cross-line first-line"></div>
        <div className="cross-line second-line"></div>
      </button>
    </div>
  );
}

export default CartBlock;
