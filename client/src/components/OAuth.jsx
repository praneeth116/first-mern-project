import React from 'react'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import {app} from '../firebase'
import {useDispatch} from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'

function OAuth() {

  const dispatch = useDispatch()

  const handleGoogleClick = async() => {
    try{
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth,provider)
        const res = await fetch('/api/auth/google',{
            method: "POST",
            headers:{
                'Content-Type' : "application/json",
            },
            body: JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            })
        })
        const data = await res.json()
        dispatch(signInSuccess(data))
    }catch(err){
        console.log("could not login with google",err)
    }
  }

  return (
    <button type='button' className='uppercase rounded-lg bg-red-700 text-white p-3
    hover:opacity-80' onClick={handleGoogleClick}>Continue with google</button>
  )
}

export default OAuth