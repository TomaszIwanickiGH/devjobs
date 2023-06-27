'use client'

import { useSelector } from 'react-redux'

const SearchBar = () => {
  const { colors } = useSelector((state) => state.globalStates)

  return (
    <div className={`${colors.primary} w-full flex justify-between items-center mt-[-2rem] p-4 rounded-xl z-10`}>
      <label htmlFor="" className="flex gap-4">
        <img src="assets/desktop/icon-search.svg" alt="search" />
        <input type="text" className="lg:w-[280px] focus:outline-none focus:border-none" placeholder="Filter by title, companies, expertise..." />
      </label>
      <label htmlFor="" className="flex gap-4">
        <img src="assets/desktop/icon-location.svg" alt="location" />
        <input type="text" className="focus:outline-none focus:border-none" placeholder="Filter by location" />
      </label>
      <div className="flex justify-center items-center gap-4">
        <label htmlFor="" className="flex gap-4">
          <input type="checkbox" className="hover:cursor-pointer" name="" id="" />
          <p className="font-[700]">Full Time Only</p>
        </label>
        <button className="bg-violet rounded-md px-8 py-2 w-[120px] text-white hover:bg-lightViolet">Search</button>
      </div>
    </div>
  )
}

export default SearchBar
