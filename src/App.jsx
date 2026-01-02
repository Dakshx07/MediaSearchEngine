import { Route, Routes } from "react-router-dom"
import HomePags from "./pages/HomePags"
import CollectionPage from '../src/pages/CollectionPage'
import NavBar from "./components/NavBar"
  import { ToastContainer, toast } from 'react-toastify';

const App = () => {

 
  return (
    <div className='min-h-screen text-white w-screen bg-gray-950 '>
      <NavBar />
     <Routes>
      <Route path="/" element={<HomePags />}/>
      <Route path="/collection" element={<CollectionPage />}/>
     </Routes>

     <ToastContainer />
    </div>
  )
}

export default App