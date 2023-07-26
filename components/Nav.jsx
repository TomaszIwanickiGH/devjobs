'use client'

import { useState } from 'react'

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav
      style={{ backgroundImage: 'url(assets/desktop/bg-pattern-header.svg)' }}
      className="rounded-es-[5rem] bg-no-repeat bg-cover w-full"
    >
      <div className="xl:px-0 px-8 pt-6 pb-12 flex justify-between items-center max-w-[1300px] mx-auto">
        <img
          src="assets/desktop/logo.svg"
          alt=""
        />
        <div className="md:flex hidden gap-4 justify-center items-center">
          <div className="flex gap-4 justify-center items-center py-4 rounded-md">
            <img
              src="assets/desktop/icon-sun.svg"
              alt="icon"
            />
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <img
              src="assets/desktop/icon-moon.svg"
              alt="icon"
            />
          </div>
          <button className="outline_btn">Add Job Offer</button>
          <button className="bg-lightViolet w-[150px] px-4 py-2 rounded-full text-white font-bold">Log In</button>
        </div>

        <div className="md:hidden flex justify-center items-center gap-4">
          <div className="flex gap-4 justify-center items-center py-4 rounded-md">
            <img
              src="assets/desktop/icon-sun.svg"
              alt="icon"
            />
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <img
              src="assets/desktop/icon-moon.svg"
              alt="icon"
            />
          </div>
          <div>
            <img
              onClick={() => setToggleMenu((prev) => !prev)}
              src={!toggleMenu ? 'assets/icon-hamburger.svg' : 'assets/icon-close.svg'}
              alt="menu"
              className="hover:cursor-pointer"
            />

            {toggleMenu && (
              <div className="bg-lightViolet p-4 absolute right-[50px] top-[100px] flex flex-col gap-6 z-10 rounded-2xl">
                <button className="outline_btn">Add Job Offer</button>
                <button className="bg-violet w-[150px] px-4 py-2 rounded-full text-white font-bold">Log In</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
