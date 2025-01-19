import { BrowserRouter } from 'react-router-dom'
import {
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas} from './components'

import './App.scss'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <div className='main-container'>
        <div className='hero-container'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='contact-container'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
