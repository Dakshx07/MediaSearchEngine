import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {

  const dispatch=useDispatch()

    const addToCollection=(item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }

  return (
    <div className='w-[28vw] relative h-55 bg-red-500 rounded-xl overflow-hidden'>
       <a target='_blank' className='h-full' href={item.url}>
         {item.type == 'photo'?<img className='w-full h-full object-cover object-center' src={item.src} alt="" />:''}
        {item.type == 'video'?<video className='w-full h-full object-cover object-center' autoPlay muted loop src={item.src}></video>:''}
        {item.type == 'GIF'?<img className='w-full h-full object-cover object-center' src={item.src} alt="" />:''}
       </a>
        <div id='bottom' className='flex justify-between items-center gap-2  w-full p-6 absolute bottom-0 text-white'>
            <h2 className='text-lg font-medium capitalize h-14 overflow-hidden'>{item.title}</h2>
            <button onClick={() => {
                addToCollection(item)
            }}
            className='bg-indigo-600 active:scale-95 cursor-pointer text-white rounded px-2'
            >
                Save
            </button>
        </div>
    
    </div>
  )
}

export default ResultCard