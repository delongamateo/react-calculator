import React, { useState } from "react";
import "./App.css";

function App() {
  /* setting numbers in states */
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  /* setting result */
  const [result, setResult] = useState(null);
  /* changing selected number to be saved in firstNumber or secondNumber */
  const [number, setNumber] = useState(1);
  /* saving operator */
  const [operator, setOperator] = useState("");

  console.log(firstNumber);
  console.log(secondNumber);

  return (
    <div className="calc">
      <div className="display">
        <input
          type="number"
          value={
            /* logic for displaying correct value */
            result !== null ? result : number === 1 ? firstNumber : secondNumber
          }
          disabled
        />
      </div>
      <div className="buttons">
        <div className="left">

          <button
            onClick={() => {
              /* logic for adding 0 if first or second number are set then we need to add 0 on end*/
              if (number === 1)
                setFirstNumber(
                  firstNumber === 0 ? firstNumber : firstNumber * 10
                );
              else
                setSecondNumber(
                  secondNumber === 0 ? secondNumber : secondNumber * 10
                );
            }}
          >
            0
          </button>

          <button className="clear"
            /* clearing states */
            onClick={() => {
              setResult(null)
              setFirstNumber(0)
              setSecondNumber(0)
              setNumber(1)
              setOperator("")
            }}
          >
            C</button>

          <button
            className="equal"
            onClick={() => {
              /* logic for calculation */
              if (operator === "+") {
                setResult(firstNumber + secondNumber);
              } else if (operator === "-") {
                setResult(firstNumber - secondNumber);
              } else if (operator === "*") {
                setResult(firstNumber * secondNumber);
              } else {setResult(firstNumber / secondNumber);
              }
            }}
          >
            =
          </button>
          {new Array(9).fill(null).map((a, i) => {
            /* displaying numbers of calculator */
            const n = i + 1;

            return (
              <button
                onClick={() => {
                  if (number === 1) setFirstNumber(firstNumber * 10 + n);
                  else setSecondNumber(secondNumber * 10 + n);
                }}
              >
                {n}
              </button>
            );
          })}
        </div>
        <div className="actions">
          <button
            onClick={() => {
              /* setting operator state and changing selected number to be saved in first or second */
              setOperator("/");
              setNumber(2);
            }}
          >
            &divide;
          </button>
          <button
            onClick={() => {
              setOperator("*");
              setNumber(2);
            }}
          >
            &times;
          </button>
          <button
            onClick={() => {
              setOperator("-");
              setNumber(2);
            }}
          >
            -
          </button>

          <button
            onClick={() => {
              setOperator("+");
              setNumber(2);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
