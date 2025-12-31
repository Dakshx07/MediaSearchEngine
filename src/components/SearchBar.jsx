import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text,setText]=useState('')

    const dispatch=useDispatch()

    //to control the relaod of the form  
    const submitHandler=(e) =>{
        e.preventDefault()
        dispatch(setQuery(text))

        setText('')
        
    }
  return (
    <div>
        <div>
            <form onSubmit={(e) =>{
                submitHandler(e)
            }} className='flex p-10 bg-gray-900 gap-10'>

                <input 
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                    
                }}
                className='w-full border-2 py-4 px-2 text-xl rounded outline-none'
                required
                type="text" 
                placeholder='Search anything....' />

                <button className='active:scale-95 border-2 py-4 px-2 text-xl rounded outline-none cursor-pointer'>
                    Search
                </button>
            </form>
        </div>
    </div>
  )
}

export default SearchBar