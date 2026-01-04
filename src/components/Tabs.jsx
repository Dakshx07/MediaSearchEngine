import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs=['photos','videos','GIF']
    const dispatch=useDispatch()
    const activetab=useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex py-6 px-80 gap-5'>
        {tabs.map(function(elem,idx){
            return (
            <button 
            className={`${activetab==elem?'bg-[#4F46E5]':'bg-[#1E293B] text-[#CBD5F5]'} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`} 
            key={idx}
            onClick={()=>{
                dispatch(setActiveTabs(elem))
            }}
            >
                {elem}
            </button>
            )
        })}
    </div>
  )
}

export default Tabs