import { useState, useEffect} from "react";
import { TodoForm } from "../components/TodoForm";
import { ITodo } from "../interfaces/Todo";
import {TodoList} from '../components/TodoList'

interface Props {
  
}

const MainPage = (props: Props) => {

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
      <TodoForm addHandler={addHandler} />
      <TodoList 
        removeTodoHandler={removeTodoHandler} 
        changeCompleteHandler={changeCompleteHandler} 
        list={list}
      />
    </>
  )
}

export default MainPage
