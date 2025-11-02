import React from "react";
import { people } from "../../../data"
import avatar from '../../../assets/default-avatar.svg'

export function Person() {
  return <div>
    {people.map(person => {
      const image = person?.images?.[0]?.small?.url || avatar
      return (
        <div key={person.id}>
          <h1>{person.name}</h1>
          <h3>Nickname: {person.nickName}</h3>
          <img src={image} alt={person.name} style={{ width: '50px' }} />
        </div>
      )
    })}
  </div>;
}
