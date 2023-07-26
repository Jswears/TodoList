import {useEffect, useState } from 'react'
import './styles.css'
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState(()=> {
    const localValue = localStorage.getItem('ITEMS')
    if(localValue === null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

function addTodo(title) {
          // Here we have to make sure to pass the function inside the setTodos to get the current or prevTodo, to be able to modify it and not have problems with it
        setTodos((currentTodos) => {
          return [...currentTodos, {id: crypto.randomUUID(), title, completed: false},]
        })
        // Example with two:
        // setTodos((currentTodos) => {
        //   return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false},]
        // })
      
}

function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed}
      }
      return todo
    })
  })
}

function deleteTodo(id) {
setTodos(currentTodos => {
  return currentTodos.filter(todo => todo.id !== id)
})
  }
// console.log(todos)
  return (  <>
      <h1 className='header'>TodoList</h1>

      <NewTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      
    </>)
}
