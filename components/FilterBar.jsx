import React, { useContext, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../customContext/themeContext'


function FilterBar(props) {
  const {setQuery} = props
  const [ isDark, setIsDark, countriesData, setCountriesData] = useContext(ThemeContext);
  
 // const [countriesData] = useOutletContext()
//const [data, setDataCountry] = useState([])
//useEffect(() => {
//  fetch('https://restcountries.com/v3.1/all')
//  .then((res) => res.json())
//  .then((data) => setDataCountry(data))
//},[])
  
  
  return (
    <div className='filter-container'>
    <select onClick = {(e)=> setQuery(e.target.value) }className={`filter-content ${isDark ? 'dark2' :''}`} >
      
    <option value={''}>Filter by region</option>
        {
        countriesData.reduce((acc, curr) =>{
          if (!acc[curr.region]){
            acc[curr.region]=1;
            acc.push( curr.region)
          }
          return acc;
             },[]).map((region) => <option value={region}>{region}</option> )
        }
        
        </select>  
        </div>
    )
  
}

export default FilterBar