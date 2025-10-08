const ErrorExample = () => {
  let count = 0

const handleClick = () => {
    count += 1
    console.log(count)
  }


  return (
    <>
      <h2>Count: {count}</h2>
      <button type="button" onClick={handleClick} className="btn">click me</button>
    </>
  );
};

export default ErrorExample;
