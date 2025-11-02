import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)} className="btn">Toggle</button>
      {isClicked && <Component />}
    </div>
  );


};

const Component = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic      
    }
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc)
  }, [])
  return (
      <h2>Hi Fellas</h2>
  )
}

export default CleanupFunction;
