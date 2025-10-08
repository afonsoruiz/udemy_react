import { useState } from 'react';
import { data } from '../../../data'

const UseStateArray = () => {
  const [item, setItem] = useState(data)

  const handleRemoveOne = (id) => {
    let remove = item.filter((item) => item.id !== id)
    setItem(remove)
    console.log(item.id)
    console.log(id)
  }

  const clearAllItems = () => {
    setItem([])
  }

  return (
    <>
      <h2>useState array example</h2>

      {item.map((item) => {
        const { id, name } = item
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => handleRemoveOne(id)} className='btn'>click me</button>
          </div>
        )
      })}
      <button onClick={clearAllItems} className='btn'>Remove all Items</button>
    </>
  );
};

export default UseStateArray;
