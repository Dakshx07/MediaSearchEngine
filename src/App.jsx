import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi"
import ResultGrid from "./components/ResultGrid"
import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"

const App = () => {

 
  return (
    <div className='min-h-screen text-white w-screen bg-gray-950 '>
     <SearchBar />
     <Tabs />
     <ResultGrid />
    </div>
  )
}

export default App