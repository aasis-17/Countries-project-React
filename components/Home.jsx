import React, { useContext } from 'react'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import Allcountries from './Allcountries'
import { ThemeContext } from '../customContext/themeContext'

export default function Home() {
    const [query, setQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDark] = useContext(ThemeContext)

      // const color = useOutletContext()
    //const isDark= color[2]
    
  return (
    <>
    <main className= {`main-container ${isDark ? 'dark' : ''}`} >
    <div className='search-container'>
      <SearchBar setSearchQuery = {setSearchQuery} />
      <FilterBar setQuery = {setQuery} />
    </div>
    <Allcountries query = {query} searchQuery = {searchQuery}/>
  </main>
  </>
  )
}
