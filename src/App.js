import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import { Route } from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/react-pizza/db.json")
      .then((resp) => resp.json())
      .then((json) => setPizzas(json.pizzas));
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper--content">
          <Header />
          <Route exact path="/react-pizza">
            <Sort />
            <PizzaBlock obj={pizzas} />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
