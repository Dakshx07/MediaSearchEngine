
import SearchBar from '../components/SearchBar'
import { useSelector } from 'react-redux'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import {Link} from 'react-router-dom'

const HomePags = () => {

    const {query}= useSelector((store) => store.search)
  return (
    <div>
       
       <SearchBar />
       

        {query != ''?<div> <Tabs />  <ResultGrid /></div>:''}
    </div>
  )
}

export default HomePags