import { useRef } from "react"
import { Link } from "react-router-dom"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const NavBar = () => {

  const navref = useRef(null)
  const navButton=useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from(navref.current, {
      y: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    })
  })
  useGSAP(function () {
    gsap.from(navButton.current, {
      x: 100,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    })
  })
  return (

    <div ref={navref} className="p-3 ">
      <div className='lol text-center rounded-4xl flex justify-between items-center bg-[#4338CA] py-2.5 px-5 '>
        <Link to='/' className='text-2xl font-[regular] font-bold'>MediaSearch</Link>
        <div className='flex gap-5 items-center'>
          <Link  className='border-2 bg-[#6366F1] text-white  gap-1 flex  leading-tight px-2.5 py-1.5 rounded-3xl active:scale-95 bg-(--c4) text-base font-medium font-[regular]' to='/'>
            <div>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4  ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </div>
            Search

          </Link>
          <Link ref={navButton} className='border-2  border-[#6366F1] text-[#C7D2FE]    leading-tight px-2.5 py-1.5 rounded-3xl active:scale-95 bg-(--c4) text-base font-medium  font-[regular]' to='/collection'>Collection</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar