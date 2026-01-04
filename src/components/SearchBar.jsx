import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import { useGSAP } from '@gsap/react'

const SearchBar = () => {

    const [text,setText]=useState('')
    const searchBarRef=useRef()
    const searchButtonRef=useRef()

    const dispatch=useDispatch()


     gsap.registerPlugin(ScrollTrigger)
      useGSAP(function(){
          gsap.from(searchBarRef.current,{
            x: -200,
            duration: 1,
            ease: "power2.out",
          })
      })
     gsap.registerPlugin(ScrollTrigger)
      useGSAP(function(){
          gsap.from(searchButtonRef.current,{
            x: 200,
            duration: 1,
            ease: "power2.out",
          })
      })

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
            }} className='flex py-6 px-12 gap-10'>

                <input 
                ref={searchBarRef}
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                    
                }}
                
                className='w-full border-2 border-(--c3) text-[#E5E7EB] placeholder-[#94A3B8] py-3 px-6 text-xl bg-[#0F172A] rounded-4xl outline-none'
                required
                type="text" 
                placeholder='Search anything....' />

                <button ref={searchButtonRef} className='active:scale-95 border-2 py-2 px-6 text-xl rounded-4xl outline-none cursor-pointer'>
                    Search
                    
                </button>
            </form>
        </div>
    </div>
  )
}

export default SearchBar