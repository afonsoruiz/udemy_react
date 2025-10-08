// import { useState } from "react";

// const UserChallenge = () => {
//   const [user, setUser] = useState(null)
//   const [isClicked, setIsClicked] = useState(false)

//   const handleClick = () => {
//     if (!isClicked) {
//       setUser({ name: 'Hello Kitty' })
//       setIsClicked(true)
//       return
//     } else {
//       setUser(null)
//       setIsClicked(false)
//       return
//     }
//   }


//   return (
//     <>
//       {user && <Logout name={user?.name} /> || <Login /> }
//       <button onClick={handleClick} className="btn">{isClicked ? 'logout' : 'login'}</button>
//     </>
//   )
// };


// const Login = () => {
//   return (
//     <div>
//       <h3>Please Login</h3>
//     </div>
//   )
// }


// const Logout = (props) => {
//   const { name } = props
//   return (
//     <div>
//       <h3>Hello there, {name}</h3>
//     </div>
//   )
// }

// export default UserChallenge;



import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ name: "Nome Aqui" })
  }

  const logout = () => {
    setUser(null)
  }


  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user?.name}</h4>
          <button onClick={logout} className='btn'>click me</button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button onClick={login} className='btn'>click me</button>
        </div>
      )
      }
    </>
  );
};

export default UserChallenge;
