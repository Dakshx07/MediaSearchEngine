import { useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGIF} from '../api/mediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import { store } from '../redux/store'
import { useEffect } from 'react'

const ResultGrid = () => {

    const {query,activeTab,results,loading,error}= useSelector((store)=>store.search)

    let data
   

    useEffect(function(){
         const getData=async () => {
        if(activeTab == 'photos'){
            let response=await fetchPhotos(query)
            data=response.results
        }
        if(activeTab == 'videos'){
            let response=await fetchVideos(query)
            data=response.videos
        }
        if(activeTab == 'GIF'){
            let response=await fetchGIF(query)
            data=response.data.results
        }
        console.log(data);
    }
        getData()
    },[query,activeTab])

  return (
    <div>
        
    </div>
  )
}

export default ResultGrid