import { Route, Routes } from "react-router-dom"
import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi"
import ResultGrid from "./components/ResultGrid"
import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"
import HomePags from "./pages/HomePags"
import CollectionPage from '../src/pages/CollectionPage'

const App = () => {

 
  return (
    <div className='min-h-screen text-white w-screen bg-gray-950 '>
     <Routes>
      <Route path="/" element={<HomePags />}/>
      <Route path="/collection" element={<CollectionPage />}/>
     </Routes>
    </div>
  )
}

export default App