import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log("data: ", data)
      return data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  useEffect(() => {
    getUsers().then(data => {
      console.log("data2: ", data)
      setUsers(data)
    })
  }, []);


  return (
    <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url } = user
        return (
          <li key={id} className="user-container">
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={`https://github.com/${login}`}>Profile</a>
            </div>
          </li>
        )
      })}
    </ul>
  )
};
export default FetchData;
