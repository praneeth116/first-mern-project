import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' id='username'
        className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text' placeholder='Email' id='email'
        className='bg-slate-100 p-3 rounded-lg'/>
        <input type='password' placeholder='Password' id='pasword'
        className='bg-slate-100 p-3 rounded-lg'/>
        <button className='bg-slate-700 rounded-lg text-white uppercase p-3
         hover:opacity-80'>
          Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className='font-semibold'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp