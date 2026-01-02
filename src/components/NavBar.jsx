import { Link } from "react-router-dom"

const NavBar = () => {
  return (

         <div className='text-center flex justify-between items-center bg-(--c2) py-3 px-5 '>
            <h2 className='text-xl font-semibold '>MediaSearch</h2>
           <div className='flex gap-5 items-center'>
             <Link className='border-2 px-2.5 py-1.5 rounded active:scale-95 bg-(--c4) text-base font-medium text-(--c1)'  to='/'>Search</Link>
             <Link  className='border-2 px-2.5 py-1.5 rounded active:scale-95 bg-(--c4) text-base font-medium  text-(--c1)' to='/collection'>Collection</Link>
           </div>
        </div>
  )
}

export default NavBar