import { useState } from "react";

const UseStateBasics = () => {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button type="button" onClick={handleClick} className="btn">click me</button>
    </>
  );
};

export default UseStateBasics;

