const Recipe = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div>{props.type}</div>
      <p>{props.duration}</p>
    </>
  );
};

export default Recipe;
