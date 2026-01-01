
import SearchBar from '../components/SearchBar'
import { useSelector } from 'react-redux'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'

const HomePags = () => {

    const {query}= useSelector((store) => store.search)
  return (
    <div>
       <SearchBar />
       <Tabs />

        {query != ''?<div>  <ResultGrid /></div>:''}
    </div>
  )
}

export default HomePags