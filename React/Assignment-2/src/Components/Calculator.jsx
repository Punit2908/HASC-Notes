import { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    setResult(eval(expression));
    setExpression("");
  };

  return (
    <div>
      <h2>Calculator</h2>
      <label htmlFor="calc">Enter the expression: </label>
      <input
        type="text"
        id="calc"
        value={expression}
        onChange={(event) => setExpression(event.target.value)}
      />

      <button onClick={handleCalculate}>Calculate</button>

      <div className="result">{result}</div>
    </div>
  );
};
export default Calculator;
