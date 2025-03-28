import { useState } from "react";

const CountDisplay = (props) => {
  return <h1>{props.count}</h1>;
};

const CounterButton = ({ setCount, amount, label }) => {
  const handleClick = () => {
    if (label === "Reset") {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + amount);
    }
  };
  return <button onClick={handleClick}>{label}</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountDisplay count={count} />
      <div className="counters">
        <CounterButton setCount={setCount} amount={1} label="Increment" />
        <CounterButton setCount={setCount} amount={-1} label="Decrement" />
        <CounterButton setCount={setCount} amount={0} label="Reset" />
      </div>
    </>
  );
};

export default Counter;
