import React from 'react'
import { ITodo } from '../interfaces/Todo'

declare var confirm: (question: string) => boolean

type Props = {
  list: ITodo[]
  changeCompleteHandler(id: number): void   
  removeTodoHandler(id: number): void
}

export const TodoList = ({
  list,
  changeCompleteHandler,
  removeTodoHandler
}: Props) => {

  const changeHandler = (id: number): void => {
    changeCompleteHandler(id)
  }

  const removeHandler = (id: number): void => {
    const shouldDelete = confirm('Точно хотите удалить?')

    if(shouldDelete) removeTodoHandler(id)
  }

  return (
    <ul className="todos">
      {list.map((todo: ITodo) => {
        return <li className="todo" key={todo.id}>
          <div className={todo.completed ? 'completed' : ''}>{todo.title}</div>
          <input type="checkbox" onChange={() => {changeHandler(todo.id)}} checked={todo.completed} />
          <br />
          <button onClick={() => removeHandler(todo.id)}>удалить</button>
        </li>
      })}
        
    </ul>
  )
}
