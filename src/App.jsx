import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import lightTheme from './lightTheme.js'
import darkTheme from './darkTheme.js'
import SassComp from "./SassComp" 
import StyledComp from "./StyledComp"
import "./App.scss"
import sassTheme from "./sass-themes"

const STRESS_QTY = 2000

const stress = (comp) => Array(STRESS_QTY).fill("").map(() => comp)

function App() {

  const [ showStyled, setShowStyled ] = useState(false)
  const [ showSass, setShowSass ] = useState(false)
  const [ selectedTheme, setTheme ] = useState('light')
  const [ useStress, setStress ] = useState(false)
  const [ hasError, setHasError ] = useState(false)


  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('style', sassTheme[selectedTheme])
  }, [selectedTheme])

  return (
    <main className="root">
      <header className="theme-control">
        <label>Tema:</label>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
        <label>Selected: {selectedTheme}</label>
        <button onClick={() => setStress(!useStress)}>Toggle Stress</button>
        <label>Stress: {String(useStress)} </label>
        <button onClick={() => setHasError(!hasError)}>Toggle Error</button>
        <label>Has Error: {String(hasError)} </label>
        
      </header>
      <main className="main">

          <section className="Sass">
            <button onClick={() => setShowSass(!showSass)}>Toggle Sass</button>
            { showSass && (
              useStress ? stress(<SassComp hasError={hasError} />) : <SassComp hasError={hasError} />
            )}
          </section>

          <ThemeProvider theme={selectedTheme === "dark" ? darkTheme : lightTheme}>
            <section className="Styled">
              <button onClick={() => setShowStyled(!showStyled)}>Toggle Styled</button>
              { showStyled && (
                useStress ? stress(<StyledComp hasError={hasError} />) : <StyledComp hasError={hasError} /> 
              )}
            </section>
          </ThemeProvider>

      </main>
    </main>
  );
}

export default App;
