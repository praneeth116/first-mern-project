import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {
  const handleChange = () => {

  }
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img 
        src={currentUser.profilePicture} alt="profile"
        className='h24 w-24 self-center cursor-pointer rounded-full object-cover'/>
        <input type='text'
        value={currentUser.username}
        placeholder='username'
        onChange={handleChange}
        className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text'
        value={currentUser.email}
        placeholder='email'
        onChange={handleChange}
        className='bg-slate-100 p-3 rounded-lg'/>
        <input type='text'
        placeholder='password'
        onChange={handleChange}
        className='bg-slate-100 p-3 rounded-lg'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase
         hover:opacity-95 disabled:80 '>
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-600 cursor-pointer' >
          Delete Account
        </span>
        <span className='text-red-600 cursor-pointer'>
          Sign Out
        </span>
      </div>
    </div>
  )
}

export default Profile