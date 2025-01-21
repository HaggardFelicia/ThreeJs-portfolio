import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience}) => (
    <VerticalTimelineElement
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      className="experience-card"
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="experience-div">
          <img
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className={styles.sectionHeadText}>{experience.title}</h3>
        <p style={{margin:0}}>{experience.company_name}</p>
      </div>

      <ul>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
          >
            {point}
          </li>
        ))}
      </ul>
        {/* map over points array */}
    </VerticalTimelineElement>
  )

const Experience = () => {
  return (
    <div className="experience">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <div className="timeline">
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work")