import React from 'react'

export default function index() {
  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <h1 className='text-3xl font-bold m-8'>Todo App</h1>
      <div className='flex flex-row w-1/2'>
        <input className='border-2 border-gray-400 rounded-md p-2 w-full' type='text' placeholder='Your todo here' />
        <button className='border-2 border-gray-400 rounded-md p-2 w-16 mx-2'>Add</button>
      </div>
      
    </div>
  )
}
