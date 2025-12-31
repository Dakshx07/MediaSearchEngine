import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {

 
  return (
    <div className='h-screen text-white w-screen bg-gray-900 '>
      <button  className="py-3 px-3 bg-green-500 m-5 rounded-2xl"  onClick={async ()=> {
       const data=await fetchPhotos('cat')

       console.log(data.results);
       
        
      }}>get photos</button>
      <button className="py-3 px-3 bg-green-500 m-5 rounded-2xl"   onClick={async ()=> {
       const data=await fetchVideos('cat')

       console.log(data.videos);
       
        
      }}>get Videos</button>

      <button className="py-3 px-3 bg-green-500 m-5 rounded-2xl"   onClick={async ()=> {
       const data=await fetchGIF('cat')

       console.log(data.data.results);
       
        
      }}>get GIFS</button>
    </div>
  )
}

export default App