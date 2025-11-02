import { nanoid } from "nanoid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list')
//   if(list) {
//     list = JSON.parse(localStorage.getItem('list'))
//   } else {
//     list = []
//   }

//   return list
// }

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}



const App = () => {
  const [grocery, setGrocery] = useState({
    text: '',
    selected: false,
  })

  const [groceries, setGroceries] = useState(defaultList)

  const handleItem = (e) => {
    setGrocery({
      ...grocery,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(grocery)
    const newGrocerie = { ...grocery, id: nanoid() }
    const newGroceries = [...groceries, newGrocerie]
    setGroceries(newGroceries)
    setLocalStorage(newGroceries)

    setGrocery({ text: '', selected: false })
    toast.success('Item added successfully')
  }

  const handleDelete = (id) => {
    const newGroceries = groceries.filter((g) => g.id !== id)
    setGroceries(newGroceries)
    setLocalStorage(newGroceries)
    toast.success('Item deleted successfully')
  }

  const editGrocery = (gId) => {
    const newGroceries = groceries.map((g) => {
      if (g.id === gId) {
        const newItem = { ...g, selected: !g.selected }
        return newItem
      }
      
      return g
    })
  }

  const handleSelect = (id) => {
    setGroceries(prev => prev.map(g => g.id === id ? { ...g, selected: !g.selected } : g))
  }

  return (
    <form onSubmit={handleSubmit} className="section-center">
      <h4>grocery bud</h4>
      <input type="text" value={grocery.text} id="text" name="text" onChange={handleItem} className="form-input" />
      <button className="btn">Add item</button>
      <div>
        {groceries.length !== 0 ? (

          groceries.map((item) => {
            const { id, text, selected } = item
            return (
              <section key={id} className="single-item">

                <input type="checkbox" name="selected" id="selected" value={selected} onClick={() => handleSelect(id)} />
                {!selected ? (<p>{text}</p>) : (<p><s>{text}</s></p>)}
                {/* change value here below */}
                <button type="button" className="btn" onClick={() => handleDelete(id)}>delete</button>
              </section>
            )
          })
        ) :
          <h3>no groceries</h3>
        }
      </div>
      <ToastContainer />
    </form>
  )
};

export default App;
