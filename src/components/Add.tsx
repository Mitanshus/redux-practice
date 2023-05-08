import React, { useRef } from 'react'
import { useAppDispatch } from '../store/features/store'
import { addPerson } from '../store/features/personSlice';

function Add() {
    const name=useRef<string>("")
    const dispatch = useAppDispatch();
  return (
    <form className='border rounded-md p-2 shadow-md m-2'>
        <label htmlFor=''>Person Name</label>
        <input className='border rounded-md p-2 shadow-md mx-2'
        onChange={(e)=>name.current=e.target.value}/>
        <button
        onClick={()=>dispatch(addPerson({name:name.current}))}>add</button>
    </form>

  )
}

export default Add