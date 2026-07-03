import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const addNumber = () => {
    if (input === "") return;

    const num = Number(input);

    if (!isNaN(num)) {
      const updated = [...numbers, num];
      setNumbers(updated);

      // immediate sum update (important for tests)
      setSum(updated.reduce((a, b) => a + b, 0));
    }

    setInput("");
  };

  useEffect(() => {
    // fallback sync
    setSum(numbers.reduce((a, b) => a + b, 0));
  }, [numbers]);

  return (
    <div className="container">
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addNumber}>Add</button>

      <h3 data-testid="sum">Total Sum: {sum}</h3>

      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default SumCalculator;
