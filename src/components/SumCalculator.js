import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const addNumber = () => {
    if (input.trim() === "") return;

    const value = parseInt(input, 10);

    if (!isNaN(value)) {
      setNumbers((prev) => [...prev, value]);
    }

    setInput("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  return (
    <div className="container">
      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addNumber}>Add Number</button>

      <h2>Total Sum: {sum}</h2>

      <h3>Numbers:</h3>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default SumCalculator;
