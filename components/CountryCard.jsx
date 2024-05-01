import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../customContext/themeContext'

function CountryCard(props) {
  const {name, capital, population, image, region, data} = props
  const [isDark] = useContext(ThemeContext)
  return (
    <Link style={{width:'300px', height:'400px'}} className={`country-card ${isDark ? 'dark2' : ''}`} to={`/${name}`} state={data}>
      <img src ={image} style={{width:'300px', height:'200px', objectFit:'cover'}}></img>
      <div className='card-text'>
        <h3 className='title'>{name}</h3>
        <p><b>Population:{population}</b></p>
        <p><b>Region:</b>{region}</p>
        <p><b>Capital:{capital}</b></p>
      </div>
    </Link>
  )
}

export default CountryCard