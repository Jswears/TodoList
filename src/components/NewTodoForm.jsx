import { useState } from "react";


export function NewTodoForm({addTodo}) {
    const [newItem, setNewItem] = useState('')
    function handleSubmit (e) {
        e.preventDefault();
        if (newItem === '') return
        
        addTodo(newItem)
    //   //This is gonna clear out the input
        setNewItem('')
      }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>New Item</label>
          {/* Here the onChange{} is gonna check each key you are adding, if you check it with a console.log(e.target.value) it's gonna show you every single key you pressed */}
          <input type="text" id="item" value={newItem} onChange={e => {setNewItem(e.target.value)}} />
        </div>
        <button className="btn">Add</button>
          </form>
    )
}