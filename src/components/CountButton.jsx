const CountButton = ({ setCount, amount, label }) => {
  const handleClick = () => {
    if (label === "Reset") {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + amount);
    }
  };
  return <button onClick={handleClick}>{label}</button>;
};

export default CountButton;
