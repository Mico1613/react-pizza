import React from "react";
import "./Header.scss";
import icon from "../assets/header_icon.png";
import amountIcon from "../assets/amount_icon.svg";

const Header = ({ price, amount }) => {
  return (
    <header className="header">
      <div className="header--logo">
        <img src={icon} alt="" />
        <div className="text">
          <h1>React Pizza</h1>
          <p>хотите питсы?</p>
        </div>
      </div>
      <button className="header--button">
              <div className="price">520 ₽</div>
              <div className="line"></div>
        <div className="amount">
          <img src={amountIcon} alt="" />
          <p>3</p>
        </div>
      </button>
    </header>
  );
};

export default Header;
