import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (!isClicked) {
      setUser({ name: 'Hello Kitty' })
      setIsClicked(true)
      return
    } else {
      setUser(null)
      setIsClicked(false)
      return
    }
  }


  return (
    <>
      {user && <Logout name={user?.name} /> || <Login /> }
      <button onClick={handleClick} className="btn">{isClicked ? 'logout' : 'login'}</button>
    </>
  )
};


const Login = () => {
  return (
    <div>
      <h3>Please Login</h3>
    </div>
  )
}


const Logout = (props) => {
  const { name } = props
  return (
    <div>
      <h3>Hello there, {name}</h3>
    </div>
  )
}

export default UserChallenge;
