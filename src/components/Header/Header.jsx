import React from "react";
import { Route, Link } from "react-router-dom";
import "./Header.scss";
import icon from "../../assets/header_icon.png";
import amountIcon from "../../assets/amount_icon.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/react-pizza">
        <div className="header--logo">
          <img src={icon} alt="" />
          <div className="text">
            <h1>React Pizza</h1>
            <p>хотите питсы?</p>
          </div>
        </div>
      </Link>
      <Route exact path="/react-pizza">
        <Link to="/cart">
          <button className="header--button">
            <div className="price">520 ₽</div>
            <div className="line"></div>
            <div className="amount">
              <img src={amountIcon} alt="" />
              <p>3</p>
            </div>
          </button>
        </Link>
      </Route>
    </header>
  );
};

export default Header;
