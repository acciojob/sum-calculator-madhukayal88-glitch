import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const addNumber = () => {
    if (input.trim() === "") return;

    const num = parseInt(input, 10);

    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]);
    }

    setInput("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  return (
    <div className="container">
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        placeholder="Enter number"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addNumber}>Add</button>

      <h3>Total Sum: {sum}</h3>

      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default SumCalculator;