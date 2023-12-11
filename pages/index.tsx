import React from 'react'
import { useState, useEffect } from 'react'
export default function index() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // localStorage.clear();
  }, [todos]);


  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  const deleteTodo = (index: number) => {
    console.log("delete Todo with index: ", index);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    console.log("updatedTodos: ", updatedTodos);
    setTodos(updatedTodos);
  };

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <h1 className='text-3xl font-bold m-8'>Todo App</h1>
      <div className='flex flex-row w-1/2'>
        <input className='border-2 border-gray-400 rounded-md p-2 w-full' type='text' placeholder='Your todo here' value={inputValue} onChange={handleInputChange}/>
        <button onClick={addTodo} className='border-2 border-gray-400 rounded-md p-2 w-16 mx-2'>Add</button>
      </div>
        <ul className="flex flex-col justify-start items-start">
        {todos.map((todo, index) => (
          <li className="w-screen flex justify-center m-2" key={index}>
            <div className="flex justify-around w-4/6 border border-x-black">
              {todo}
              <button className="border border-black bg-red-300" onClick={() => deleteTodo(index)}>
                Delete
              </button>{" "}
            </div>
          </li>
        ))}
      </ul>
       
      
    </div>
  )
}
