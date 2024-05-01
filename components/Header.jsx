import { useContext } from "react"
import { ThemeContext } from "../customContext/themeContext"

function Header() {
  //const [isDark, setIsDark] = theme
  const [isDark, setIsDark] = useContext(ThemeContext)

  
  
 
  return (
    <header className= {`container ${isDark ? 'dark' : ''}` }>
      <div className='herder-content'>
        <h2 className='title'>
          <a href='/'>Where in the world?</a>
          </h2>
        <p style = {{cursor:'pointer'}} onClick={() => setIsDark(!isDark)}  className='theme-changer'>
          <i class={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp; {`${isDark ? 'Light' :'Dark'}`} Mode
        </p>
      </div>
    </header>
  )
}

export default Header