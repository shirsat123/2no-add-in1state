import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // const [num1, setNum1] = useState(null);
  // const [num2, setNum2] = useState(null);
  // const [results, setResults] = useState(null);
  const [state, setState] = useState({ num1: null, num2: null, results: null });
  return (
    <div className="App">
      <h1>Addition of 2 no's:</h1>
      <input
        type="number"
        id="no1"
        value={state.num1}
        onChange={(e) => setState({ ...state, num1: e.target.value })}
      />
      <input
        type="number"
        id="no2"
        value={state.num2}
        onChange={(e) => setState({ ...state, num2: e.target.value })}
      />
      <button
        onClick={() =>
          setState({
            ...state,
            results: parseInt(state.num1) + parseInt(state.num2)
          })
        }
      >
        Result
      </button>
      <br />

      <b> Value ={state.results}</b>
    </div>
  );
}
