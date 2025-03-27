const ClickListener = () => {
  const handleClick = (event) => {
    // console.log("Clicked!")
    console.log(event);
  };

  return (
    <div>
      <h4>Click Listener</h4>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default ClickListener;
