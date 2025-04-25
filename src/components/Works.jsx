import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { github, link } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index,name,description,tags,image,source_code_link, code_url}) =>{
  return(
    <motion.div variants={fadeIn("up","spring", index*0.5, 0.75)} className="project-cards-container">
      <Tilt
        options={{
          max: 45,
          scale: 1, 
          speed: 450
        }}
        className="project-card shadow-card green-blue-gradient"
      >
        <div className="project-card-bg">
          <div className="project-card-container">
            <img src={image} alt={name} />
            <div className="card-img_hover project-card-img-div">
              <div className="project-links">
                <div
                  onClick={()=> window.open(source_code_link, "_blank")}
                  className="project-link"
                  >
                  <img 
                    src={github}
                    alt="github"
                    className="githb-link"
                    />
                </div>
                <div
                  onClick={()=> window.open(code_url, "_blank")}
                  className="project-link"
                  >
                  <img 
                    src={link}
                    alt="website url"
                    className="website-link"
                    />
                </div>
              </div>

            </div>
          </div>

          <div className="project-card-description">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>

          <div className="tag-div">
            {tags.map((tag)=>(
              <p key={tag.name} className={`${tag.color} text-[12px]`}>{tag.name}</p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className="works">
      <motion.div variants={textVariant()}>
        <p className={'sectionSubText'}>My Work</p>
        <h2 className={'sectionHeadText'}>Projects.</h2>
      </motion.div>

      <div className="container">
        <motion.p
          variants={fadeIn("","", 1,1)}
          className="motion-p"
        >
          This collection of projects showcases my technical expertise and hands-on experience through real-world applications of my work. Each project is summarized with essential details, along with links to the corresponding code repositories or live website URLs for further exploration.
        </motion.p>
      </div>

      <div className="project">
        {projects.map((project,index)=>(
          <ProjectCard
            index={index}
            key={`project-${index}`}
            {...project}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "");