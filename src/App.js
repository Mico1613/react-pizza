import "./App.scss";
import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import SortMenu from "./components/Sort/SortMenu";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Cart from "./components/Cart/Cart.jsx";

import { setPizzas } from "./redux/actions/pizzas";
import {useDispatch } from "react-redux";

function App({}) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/pizzas")
      .then(({ data }) => dispatch(setPizzas(data)));
  }, []);
  
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper--content">
          <Header />
          <Route exact path="/react-pizza">
            <SortMenu />
            <PizzaBlock/>
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </div>
      </div>
    </div>
  );
}
export default App;

