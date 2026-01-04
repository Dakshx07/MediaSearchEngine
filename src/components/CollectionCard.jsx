import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'

const CollectionCard = ({item}) => {

    const dispatch=useDispatch()
    const removeFromCollection=(item)=>{
        dispatch(removeCollection(item.id))
         dispatch(removeToast())
    }
      const overLayRef = useRef(null)
      const cardRef = useRef(null)
    
    
    
      useGSAP(function () {
        gsap.set(overLayRef.current, {
          opacity: 0,
          y: 30,
        })
    
        overLayRef.current.tl = gsap.timeline({ paused: true })
          .to(overLayRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power3.out'
          })
      })

  return (
    <div
    onMouseEnter={() => overLayRef.current.tl.play()
        
      }
      onMouseLeave={() => overLayRef.current.tl.reverse()}
     className='w-[28vw] relative h-55 bg-red-500 hover:rounded-2xl transition-all overflow-hidden'>
       <a ref={cardRef} target='_blank' className='h-full' href={item.url}>
         {item.type == 'photo'?<img className='w-full h-full object-cover object-center' src={item.src} alt="" />:''}
        {item.type == 'video'?<video className='w-full h-full object-cover object-center' autoPlay muted loop src={item.src}></video>:''}
        {item.type == 'GIF'?<img className='w-full h-full object-cover object-center' src={item.src} alt="" />:''}
       </a>
        <div ref={overLayRef}  id='bottom' className='flex justify-between items-center gap-2  w-full p-6 absolute bottom-0 text-white'>
            <h2 className='text-lg font-medium capitalize h-14 overflow-hidden'>{item.title}</h2>
            <button onClick={() => {
                removeFromCollection(item)
                
            }}
            className='bg-indigo-600 active:scale-95 font-[regular] cursor-pointer text-white rounded-2xl px-3 py-1'
            >
                Remove
            </button>
        </div>
    
    </div>
  )
}

export default CollectionCard