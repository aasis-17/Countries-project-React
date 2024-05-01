
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ThemeContext } from '../customContext/themeContext'



export default function Countrydetail() {
  const params = useParams()
  const countryName = params.country
  const location = useLocation()
  //const color = useOutletContext()
  const [isDark] = useContext(ThemeContext)
  const [countryData, setCountryData] = useState(null)
  const [error, setError] =useState(false)
  

  function updateCountry(data){
  console.log(data)
    setCountryData({
      name : data.name.common,
      region : data.region,
      population : data.population.toLocaleString('en-IN'),
      nativeName :Object.values(data.name.nativeName)[0].common,
      currencies : Object.values(data.currencies).map((curr) => curr.name).join(', '),
      language :Object.values(data.languages).join(','),
      borders : [] ,  
      image: data.flags.svg
    })

    if(!data.borders){
      
    } else{
      Promise.all(
      data.borders.map((border) => {
       return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) =>  borderCountry.name.common) 
        } )
      ).then((border) => setCountryData((prevState) => ( {...prevState,  borders :[...prevState.borders, ...border]})))
  }
}
 
 
  useEffect(() => {
    if (location.state){
       updateCountry(location.state)
       return
    }

  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then(([data]) =>  updateCountry(data)).catch((err) =>  setError(true) )
},[countryName])
  
  if (error){
   return <div>somrthing went wrong</div>
  }
  return (
   countryData === null? 'Loading...' : <>
   <div className= {`detail-container ${isDark ? 'dark' : ''} `}>
    <button className='back-button' onClick={() => history.back()}>back </button>
    <div className='detail'>
    <div className='h2'>
    <h2>Name :{countryData.name}</h2>
    <h2>Nativename:{countryData.nativeName}</h2>
    <h2>Population:{countryData.population}</h2>
    <h2>Region:{countryData.region}</h2>
    <h2>Currencies:{countryData.currencies}</h2>
    <h2>Language:{countryData.language}</h2>
    <div>
      <h3>Boarder Countries:{
        countryData.borders.map((border) => <Link to={`/${border}`} ><span className='borders'> {border}</span></Link>)
      }</h3>
    </div>
    </div>
    <div><img className="detail-img" src={`${countryData.image}`}></img></div>
    </div>
   
    </div>
    
    </>
  )
}
