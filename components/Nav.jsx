import React from 'react'

const Nav = () => {
  return (
    <nav style={{ backgroundImage: 'url(assets/desktop/bg-pattern-header.svg)' }} className="rounded-es-[5rem] bg-no-repeat bg-cover">
      <div className="lg:px-40 md:px-16 px-8 pt-6 pb-12 flex justify-between items-center">
        <img src="assets/desktop/logo.svg" alt="" />
        <div className="flex gap-4 justify-center items-center py-4 rounded-md">
          <img src="assets/desktop/icon-sun.svg" alt="icon" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img src="assets/desktop/icon-moon.svg" alt="icon" />
        </div>
      </div>
    </nav>
  )
}

export default Nav
