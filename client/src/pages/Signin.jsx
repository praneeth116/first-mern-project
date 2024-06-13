import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Signin() {

  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value})
    console.log(formData)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setError(false)
      setLoading(true)
      const res = await fetch('/api/auth/signin',{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data)
      setLoading(false)
      if(data.success === false){
        setError(true)
        return
      }
      navigate("/")
      
    }catch(error){
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className='mx-auto p-3 max-w-xl'>
      <h1 className='text-3xl text-center my-7 font-semibold'>Sign in</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text'
         placeholder='Email'
         id='email'
         className='bg-slate-100 rounded-lg p-3'
         onChange={handleChange}
        />
        <input type='text'
         placeholder='Password'
         id='password'
         className='bg-slate-100 rounded-lg p-3'
         onChange={handleChange}
        />
        <button disabled={loading} className='bg-slate-700 rounded-lg text-white uppercase p-3
         hover:opacity-80 disabled:opacity-80'>
          {loading ? "Loading...": "Sign In"}
        </button>
        
       <div className='flex gap-2 mt-4'>
         <p>Don&#x27;t have an account?</p>
         <Link to="/sign-up">
           <span className='font-semibold hover:underline'>Sign Up</span>
         </Link>
       </div>
          
      </form>
      <p className='text-red-700 mt-5'>{error && "Something went wrong!"}</p>
    </div>

  )
}

export default Signin