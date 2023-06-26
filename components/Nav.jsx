import React from 'react'

const Nav = () => {
  return (
    <nav style={{ backgroundImage: 'url(assets/desktop/bg-pattern-header.svg)' }} className="rounded-es-[3.5rem] bg-no-repeat bg-cover">
      <div className="px-40 pt-8 pb-12 flex justify-between items-center">
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
