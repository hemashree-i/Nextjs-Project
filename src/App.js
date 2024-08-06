import { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import UlTodo from "./UlTodo";

function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("Items")
    if (localValue ==null) return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("Items" ,JSON.stringify(todos))
  },[todos])

  function addtodo(title){
    setTodos((prevTodos) => {
      //prevTodos is same as todos
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          completed: false,
          title,
        },
      ];
    }); //to hold previous value we follow this
    
  }
  function handleToggle(id ,completed){
    setTodos(prevTodos => {
      console.log("111")
        return prevTodos.map(todo => {
          if (todo.id === id){
            console.log({...todo})
            return{ ...todo, completed }
          }
          return todo
        })
      })        
  }

  function todoDelete(id){
    setTodos(prevTodos =>{
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm  onSubmit={addtodo}/>
      <h1>Todo List</h1>
      <UlTodo todos={todos} handleToggle={handleToggle} todoDelete={todoDelete}/>
    </>
  );
}

export default App;

// export default function App(){
//   return "hi"
// }
