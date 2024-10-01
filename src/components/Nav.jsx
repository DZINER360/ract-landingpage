import React from 'react'

export const Nav = () => {
  return (
    <div className='w-full h-20   bg-black text-white flex items-center justify-between'>
      <div className="logo w-[45%] h-full flex items-center justify-center text-3xl bg-stone-900 ">PROTOFILO.</div>
      <div className="nav-links gap-10  text-2xl  flex px-[18.9vw] ">
      <a href="#" className="nav-link">Home</a>
      <a href="#" className="nav-link">About</a>
      <a href="#" className="nav-link">Services</a>
      <a href="#" className="nav-link">Contact</a>
      </div>
    </div>
  )
}

export default Nav