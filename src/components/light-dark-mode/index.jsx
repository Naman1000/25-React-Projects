

import React, { useState } from 'react'
import useLocalStorage from './useLocaleStorage'
import './styles.css'

const LightDarkMode = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handletheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
    
  }
  console.log(theme)

  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container'>
            <p>Hello world</p>
            <button onClick={handletheme}>Change theme</button>
        </div>
      
    </div>
  )
}

export default LightDarkMode 