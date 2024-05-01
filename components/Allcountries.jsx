import React, { useContext, useEffect } from 'react'
import CountryCard from './CountryCard.jsx'
import { ThemeContext } from '../customContext/themeContext.js';



function Allcountries(props) {
  const {query, searchQuery} = props;
  const [ isDark, setIsDark, countriesData, setCountriesData] = useContext(ThemeContext);



  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=> res.json())
    .then((data) =>  setCountriesData(data))
    
    
  },[])
 

  return (
    <>
    <div className='countries-container' style={{display:'flex',  flexWrap:'wrap', justifyContent:'space-evenly', rowGap:'20px'}}>
 
 {
  countriesData.filter((countryObj) => countryObj.region.includes(query))
  .filter((countryObj) => countryObj.name.common.toLowerCase().includes(searchQuery))
  .map((countryObj) => { 

  return( <CountryCard 
    name={countryObj.name.common}
    capital = {countryObj.capital}
    population = {countryObj.population}
    image = {countryObj.flags.svg}
    region = {countryObj.region}
    data = {countryObj}
     />
     )
    })
} 
 
    </div>
    </>
 
  )
}

export default Allcountries