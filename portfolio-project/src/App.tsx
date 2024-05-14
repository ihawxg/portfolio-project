import React from "react"

import { About, Footer, Header, Skills, Work } from './container'
import { Navbar } from "./componenets"
import './App.scss'
// import 'react-tooltip/dist/react-tooltip.css'

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}

export default App
