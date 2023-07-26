export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
             // You must add a key to the component with a unique identifier, ex: todo.id *dont use index*
             <li>
             <label>
               <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
               {title}
             </label>
             <button className="btn btn-danger" onClick={ () => deleteTodo(id)}>Delete</button>
           </li> 
    )
}