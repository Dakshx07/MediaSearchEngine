import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGIF} from '../api/mediaApi'
import {setLoading,setError,setResults} from '../redux/features/searchSlice'
import { store } from '../redux/store'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const {query,activeTab,results,loading,error}= useSelector((store)=>store.search)
    const dispatch=useDispatch()
   
   

    useEffect(function(){
        if(!query) return 
         const getData=async () => {
            try {
                dispatch(setLoading())
                let data=[]
            if(activeTab == 'photos'){
                let response=await fetchPhotos(query)
                //NORMALIZATION OD DATA USING MAP
                data=response.results.map((item)=>({
                    id:item.id,
                    type:'photo',
                    title:item.alt_description,
                    thumbnail:item.urls.small,
                    src:item.urls.full,
                    url:item.links.html
    
                }))
            }
            if(activeTab == 'videos'){
                let response=await fetchVideos(query)
                data=response.videos.map((item)=>({
                    id:item.id,
                    type:'video',
                    title:item.user.name || 'video',
                    thumbnail:item.image,
                    src:item.video_files[0].link,
                    url:item.url
    
                }))
            }
            if(activeTab == 'GIF'){
                let response=await fetchGIF(query)
                data=response.data.results.map((item)=>({
                    id:item.id,
                    type:'GIF',
                    title:item.title || 'GIF',
                    thumbnail:item.media_formats.tinygif.url,
                    src:item.media_formats.gif.url,
                    url:item.url
    
                }))
            }
           
            dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
    }
        getData()
    },[query,activeTab])

    if(error) return <h1>ERROR</h1>
    if(loading) return <h1>Loading...</h1>

  return (
    <div className='flex flex-wrap w-full justify-start overflow-auto gap-14 p-5  '>
        {results.map((item,idx)=>{
            return <div key={idx}>
                <ResultCard item={item}/>
            </div>
        })}
    </div>
  )
}

export default ResultGrid