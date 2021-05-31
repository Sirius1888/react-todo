import TodoList from './Todo/TodoList'
import React from 'react'
import Context from './Context'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'купить хлеб' },
    { id: 2, completed: true, title: 'купить масло' },
    { id: 3, completed: false, title: 'купить молоко' }
  ])
 
  function toggleTodo(id) {
    setTodos(
        todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
  return (
    <Context.Provider value={{ removeTodo }}>    
    <div className="wrapper">
      <h1>REACT TUTORIAL</h1>
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos</p>}
      
    </div>
    </Context.Provider>
  )
}

export default App;
