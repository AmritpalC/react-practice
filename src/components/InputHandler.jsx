const InputHandler = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h4>Input Handler</h4>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default InputHandler;
