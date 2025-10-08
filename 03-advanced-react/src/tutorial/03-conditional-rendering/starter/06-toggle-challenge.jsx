// import { useState } from "react";

// const ToggleChallenge = () => {
//   const [isClicked, setIsClicked] = useState(false)

//   const handleClick = () => {
//     setIsClicked(prev => !prev)
//   }

//   const value = isClicked ? 'hello world' : ''

//   return (
//     <>
//       <button onClick={handleClick} className="btn">toggle</button>
//       <h5>{isClicked ? 'hello world' : ''}</h5>
//     </>
//   )
// };

// export default ToggleChallenge;

import { useState } from "react";

const ToggleChallenge = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(prev => !prev)
  }

  return (
    <>
      <button onClick={handleClick} className="btn">toggle</button>
      {/* { isClicked ? <Alert /> : ''} */}
      {isClicked && <Alert />}
    </>
  )
};


const Alert = () => {
  return (
    <div className="alert alert-danger">hello world</div>
  )
}

export default ToggleChallenge;
