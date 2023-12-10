import React from 'react'

export default function index() {
  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <h1 className='font-bold m-5'>Todo App</h1>
      <input className='border-2 border-gray-400 rounded-md p-2 w-1/2' type='text' placeholder='Your todo here' />
      <button className='border-2 border-gray-400 rounded-md p-2 w-1/2 mt-2'>Add</button>
    </div>
  )
}
