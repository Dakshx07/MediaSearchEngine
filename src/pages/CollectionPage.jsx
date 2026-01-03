import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice"


const CollectionPage = () => {

  const dispatch=useDispatch()

  const clearAll=() =>{
    dispatch(clearCollection())
  }

  const collection=useSelector(state => state.collection.items)
  return (
   <div className="overflow-auto  p-5 ">
    {collection.length>0?<div className="flex justify-between py-4 mb-4">
    <h2 className="text-xl uppercase font-medium ">
      Your Collection
    </h2>
    <button onClick={() =>{
      clearAll()
    }}
    className="bg-red-600 p-2 rounded text-base cursor-pointer active:scale-95 transition">
      Clear Collection
      </button>
    </div>:<h2 className="text-3xl text-center uppercase font-medium ">Collection is Empty</h2>}

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