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

import './index.scss'

function App() {

  return (
    <BrowserRouter>
      <div className='main-container'>
        <div className='navigation-container'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className='contact-container'>
          <Contact/>
          {/* <StarsCanvas/> */}
        </div>

        {/* <a href="https://www.vecteezy.com/free-png/web">Web PNGs by Vecteezy</a> */}
      </div>
    </BrowserRouter>
  )
}

export default App
