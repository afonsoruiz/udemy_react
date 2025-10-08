import { useState } from "react"
import {data} from './data'

const User = (props) => {
  const { id, age, name, image, removal } = props
  const [people, setPeople] = useState(data)

  const handleNumberBithdays = () => {
    return (
      <div>handleNumberBithdays</div>
    )
  }

  const handleRemoveUser = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
    console.log(newPeople)
  }

  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div key={id}>
        <h4>{name}</h4>
        <p>{age} years</p>
        <br />
        <button onClick={() => removal(id)} className="btn">remove me</button>
      </div>
    </article>
  )
}

export default User
