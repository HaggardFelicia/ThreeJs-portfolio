import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="tech">
      {technologies.map((technology)=>(
        <div className="balls" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'skills')