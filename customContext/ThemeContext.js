import { createContext, useState } from "react";

export const ThemeContext = createContext()
 
export function ThemeProvider({ children }){
    console.log(children)
    const [countriesData, setCountriesData] = useState([])
    const [isDark, setIsDark] = useState(false)

return (
    <ThemeContext.Provider value={[isDark, setIsDark, countriesData, setCountriesData]}>
        {children}
        </ThemeContext.Provider>
)
}