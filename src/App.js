import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Sort from "./components/Sort";

function App() {

  return (
    <div>
      <div className="wrapper">
        <div className="wrapper--content">
          <Header />
          <Sort/>
        </div>
      </div>
    </div>
  );
}

export default App;
