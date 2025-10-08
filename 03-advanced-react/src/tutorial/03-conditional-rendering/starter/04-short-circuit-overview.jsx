import { use, useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('susan')

  return (
    <div>
      <h4>Falsy OR: {text || 'hello world'}</h4> {/* o primeiro valor truthy que encontrar */}
      <h4>Falsy AND: {text && 'hello world'}</h4> {/* o primeiro valor falsy que encontrar */}
      <h4>Truthy OR: {name || 'hello world'}</h4> {/* o primeiro valor truthy que encontrar */}
      <h4>Truthy AND: {name && 'hello world'}</h4> {/* se não houver falsy, devolve o último valor (truthy). */}
    </div>
  )
};
export default ShortCircuitOverview;
