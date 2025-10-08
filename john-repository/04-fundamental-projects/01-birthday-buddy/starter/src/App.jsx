import { useState } from "react";
import { data } from './data'
import User from './User.jsx'

const App = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    let newUsers = people.filter((person) => person.id !== id)
    setPeople(newUsers)
  }

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return (
            <User {...person} key={person.id} removal={removePerson} />
          )
        })}
        <button onClick={() => setPeople([])} className="btn btn-block">remove all</button>
      </div>
    </main>
  );
};
export default App;
