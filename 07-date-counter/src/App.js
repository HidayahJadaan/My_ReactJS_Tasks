import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("Oct 12 2023");

  const [step, setStep] = useState(1);
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min={0}
          max={17}
          onChange={(e) => setStep(+e.target.value)}
        />

        <span>Steps: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>

        <input
          type="text"
          placeholder="set count value..."
          value={step}
          onChange={(e) => setCount(+e.target.value)}
        />

        <button onClick={() => setCount((c) => c + step)}>+</button>

      </div>

      <p>
        <span>
          {" "}
          {count === 0
            ? "Today is: "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago`}
        </span>
        <span> {date.toDateString()} </span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}



    </div>
  );
}
