import { useState } from "react";

const CountDisplay = (props) => {
  return <h1>{props.count}</h1>;
};

const IncreaseButton = (props) => {
  const increaseCount = () => {
    props.setCount(props.count + 1);
  };
  return <button onClick={increaseCount}>Increment</button>;
};

const DecreaseButton = (props) => {
  const decreaseCount = () => {
    props.setCount(props.count - 1);
  };
  return <button onClick={decreaseCount}>Decrement</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountDisplay count={count} />
      <div className="counters">
        <IncreaseButton count={count} setCount={setCount} />
        <DecreaseButton count={count} setCount={setCount} />
      </div>
    </>
  );
};

export default Counter;
