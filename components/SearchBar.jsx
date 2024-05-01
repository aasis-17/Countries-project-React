import React, { useContext } from 'react'
import { ThemeContext } from '../customContext/themeContext'

function SearchBar({setSearchQuery}) {
  const [isDark] = useContext(ThemeContext)
  return (
    <div className={`search-content ${isDark ? 'dark2' : ''}`}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className={`${isDark ? 'dark2' : ''}`} onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} type='text' placeholder='Search for a country..' />
    </div>
  )
}

export default SearchBar