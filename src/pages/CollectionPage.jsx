import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const CollectionPage = () => {

  const dispatch=useDispatch()

  const clearAll=() =>{
    dispatch(clearCollection())
  }

  const collectionBtnRef=useRef(null)
  const clearBtnRef=useRef(null)

  useGSAP(function(){
    gsap.from(collectionBtnRef.current,{
      x:-200,
      duration:1,
      ease: "power2.out",
    })
    gsap.from(clearBtnRef.current,{
      x:200,
      duration:1,
      ease: "power2.out",
    })
  })

  const collection=useSelector(state => state.collection.items)
  return (
   <div className="overflow-auto  p-5 ">
    {collection.length>0?<div className="flex justify-between py-4 mb-4">
    <h2 ref={collectionBtnRef} className="text-2xl bg-[#0F172A] border-(--c3) border-2 p-2 rounded font-medium ">
      Your Collection
    </h2>
    <button ref={clearBtnRef} onClick={() =>{
      clearAll()
    }}
    className="bg-red-600 font-[regular] px-2 py-1 rounded-2xl text-lg cursor-pointer active:scale-95 transition">
      Clear Collection
      </button>
    </div>:<div className="flex items-center justify-center mt-20"><h2 className="text-3xl font-[regular] bg-[#0F172A] border-(--c3) border-2 p-12 rounded-2xl  text-center font-medium ">Collection is Empty</h2></div>}

     <div className="flex flex-wrap w-full justify-start  gap-14 ">
        {collection.map((item,idx) => {
          return <div  key={idx}>
            <CollectionCard item={item}/>
          </div>
        })}
    </div>  
   </div>
  )
}

export default CollectionPage