import { useState } from "react";
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountDisplay count={count} />
      <div className="counters">
        <CountButton setCount={setCount} amount={1} label="Increment" />
        <CountButton setCount={setCount} amount={-1} label="Decrement" />
        <CountButton setCount={setCount} amount={0} label="Reset" />
      </div>
    </>
  );
};

export default Counter;
