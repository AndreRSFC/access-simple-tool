import { useState } from "react";

import "./CounterInput.css";

interface CounterInputProps {
  handleClik: (item: number) => void;
}

const CounterInput = ({ handleClik }: CounterInputProps) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    handleClik(1);
    setValue(value + 1);
  };

  const handleDecrement = () => {
    handleClik(-1);
    setValue(value - 1);
  };

  return (
    <div className="counterInput">
      <button
        onClick={handleDecrement}
        disabled={value === 0}
        className="counterInput-button"
      >
        -
      </button>
      <div className="counterInput-display">{value} %</div>
      <button
        onClick={handleIncrement}
        className="counterInput-button"
        disabled={value === 70}
      >
        +
      </button>
    </div>
  );
};

export default CounterInput;
