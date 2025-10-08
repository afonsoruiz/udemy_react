import { useState } from "react";

const UseStateGotcha = () => {

  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)

    // setValue((currentState) => {
    //   const newState = currentState + 1
    //   console.log(newState)
    //   return newState
    // })
    // console.log(value)

    // setTimeout(() => {
    //   console.log("clicked the button")
    //   // setValue(value + 1)
    //   setValue((currentState) => {
    //     return currentState + 1;
    //   })
    // }, 3000);
  }

  const helloWorld = () => {
    console.log("hi there")
  }

  helloWorld()

  return (
    <>
    <h2>increase</h2>
    <h2>{value}</h2>
    <button type="btn" className="btn" onClick={handleClick}>click</button>
    </>
  );
};

export default UseStateGotcha;
