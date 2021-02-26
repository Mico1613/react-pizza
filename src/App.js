import "./App.scss";
import React from "react";

function App() {
  const [number, setNumber] = React.useState(0);
  let plusNumber = () => setNumber(number + 1);
  let resetNumber = () => setNumber(0);
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plusNumber}> Нажми себе на жопу, долбоеб</button>
      <div>
        <button onClick={resetNumber}> Очисти</button>
      </div>
    </div>
  );
}

export default App;
