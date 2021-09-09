import React, {useRef} from 'react'

type Props = {
  addHandler(value: string): void
}

export const TodoForm = ({addHandler}: Props) => {
  const input = useRef<HTMLInputElement>(null)
  // const [todo, setTodo] = useState<string>('')

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTodo(event.target.value)
  // }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      addHandler(input.current!.value)
      input.current!.value = ''
    }
  }

  return (
    <div>
      <input
        ref={input}
        onKeyPress={handleKeyPress}
        type="text" 
      />
    </div>
  )
}
