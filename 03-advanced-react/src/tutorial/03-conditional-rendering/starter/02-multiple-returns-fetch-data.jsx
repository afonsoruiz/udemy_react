import { useEffect, useState } from 'react';
import { setSourceMapRange } from 'typescript';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          setIsLoading(false)
          return;
        }
        const data = await response.json()
        console.log(data)
        setUser(data)
      } catch (error) {
        setIsError(true)
        console.log(error)
      }
      setIsLoading(false)
    };
    getUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Returning an errorcc...</h2>
  }

  const { login, avatar_url, company, bio } = user
  return (
    <div>
      <img style={{ width: '150px', borderRadius: '25px' }} src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  )

};
export default MultipleReturnsFetchData;
