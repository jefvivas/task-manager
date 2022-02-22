import React, { useRef } from 'react'
import "./styles.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e)
        inputRef.current?.blur()
        }}>
        <input 
        ref= {inputRef}
        type='input'
        value={todo}
        onChange = {
            (e) => setTodo(e.target.value)
        }
         placeholder='Digite a Tarefa' className='input_box'></input>
        <button className='submit_button' type='submit'>Vai</button>
    </form>
  )
}

export default InputField