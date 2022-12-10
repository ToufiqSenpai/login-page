import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='max-w-md m-auto h-max absolute top-0 bottom-0 left-0 right-0 flex flex-col text-center px-3'>
      <Link to='/login' className='text-lg border border-solid border-black rounded-full py-2'>Login</Link>
      <Link to='/signup' className='py-2 text-lg bg-black text-white rounded-full mt-3'>Sign Up</Link>
    </div>
  )
}

export default Home