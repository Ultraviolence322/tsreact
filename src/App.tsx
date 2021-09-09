import { useState, useEffect} from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { ITodo } from "./interfaces/Todo";
import {TodoList} from './components/TodoList'

import './index.css'

function App() {
  const [list, setList] = useState<ITodo[]>([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')

    setList(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list))
  }, [list])

  const addHandler = (value: string): void => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setList([newTodo, ...list])
  }

  const changeCompleteHandler = (id: number) => {
    const newList = list.map((todo): ITodo => {
      if(todo.id === id) {
        todo.completed = !todo.completed 
      } 
      return todo
    })

    setList(newList)
  }

  const removeTodoHandler = (id: number): void => {
    const newList = list.filter((todo) => todo.id !== id)

    setList(newList)
  }

  return (
    <>
      <Navbar />
      <h1>HI TSX</h1>
      <TodoForm addHandler={addHandler} />
      <TodoList 
        removeTodoHandler={removeTodoHandler} 
        changeCompleteHandler={changeCompleteHandler} 
        list={list}
      />
    </>
  );
}

export default App;
