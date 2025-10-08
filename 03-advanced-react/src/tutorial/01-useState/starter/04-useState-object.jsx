import { useState } from 'react';
import { data } from '../../../data';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'dance'
  })

  const handleChangePerson = () => {
    // setPerson({
    //   name: 'john',
    //   age: 28,
    //   hobby: 'drink water'
    // })
    setPerson({...person, name: 'susan'})
  }

  return (
    <>
      <h1>{person.name}</h1>
      <h3>{person.age}</h3>
      <h4>Enjoys to: {person.hobby}</h4>
      <button onClick={handleChangePerson} className='btn'>change to john</button>
    </>
  );
};

export default UseStateObject;
