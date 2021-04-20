import "./App.scss";
import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SortMenu from "./components/Sort/SortMenu";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import CartEmpty from "./components/Cart/CartEmpty.jsx";
import CartFilled from "./components/Cart/CartFilled.jsx";
import { useSelector } from "react-redux";

function App() {
  const items = useSelector(({ cart }) => cart.items);
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper--content">
          <Header />
          <Route exact path="/react-pizza">
            <SortMenu />
            <PizzaBlock />
          </Route>
          <Route exact path="/cart">
            {Object.keys(items)[0] ? <CartFilled /> : <CartEmpty />}
          </Route>
        </div>
      </div>
    </div>
  );
}
export default App;
