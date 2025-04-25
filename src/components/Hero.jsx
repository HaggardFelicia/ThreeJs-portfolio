import {motion} from 'framer-motion'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='hero'>
      <div className={`hero-container ${'paddingX'}`}>
        <div className="hero-div">
          <div className='hero-circle'/>
          <div className='hero-line'/>
        </div>

        <div>
          <h1 className={`${'heroHeadText'}`}>Hi, I'm <span className='hero-name'>Felicia</span></h1>
          <p className={`${'heroSubText'}`}>
            I am a front-end web developer!
          </p>
        </div>
      </div>
        <ComputersCanvas/>

        {/* <div className='scroll-container'>
          <a href="#about" >
            <div className="scroll-border">
              <motion.div 
                animate={{
                  y: [ 0,24,0]
                }}
                transition={{
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='scroll-ball'
              />
            </div>
          </a>
        </div> */}
    </section>
  )
}

export default Hero