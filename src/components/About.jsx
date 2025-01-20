import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index, title, icon}) =>{
  return (
    <Tilt className="service-card-container">
        <motion.div 
          variants={fadeIn("right", "spring", 0.5*index, .75)}
          className='service-card-div green-pink-gradient  shadow-card'
        >
          <div
            options={{max: 45, scale: 1, speed: 450}}
            className='service-card'
          >
            <img
              src={icon}
              alt='web-development'
              className='service-card-img'
            />
            <h3>{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className={`about ${styles.paddingX} ${styles.paddingY}`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='about-text'>
        My journey into web development began with a high school introduction to HTML. I went on to earn an Associate of Science in Web Development from Full Sail University, where I refined my skills in front-end technologies, including React.js, TypeScript, JavaScript, and SCSS. As I look to the future, I am enthusiastic about exploring new frameworks and contributing to projects that create a meaningful impact. Let’s connect and collaborate to create something extraordinary together!
      </motion.p>

      <div className='service-cards-container'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </div>
  )
}

export default About