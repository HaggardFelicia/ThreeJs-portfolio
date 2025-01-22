import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({index,testimonial,name,designation,company,image}) => (
  <motion.div
    variants={fadeIn("","spring",index*0.5, 0.75)}
    className='feedback-motion-div'
  >
    <p 
      className='testimonial-header-text'>''
    </p>

    <div          
      className='testimonial-text-div'>
      <p className='testimonial-text'>{testimonial}</p>

      <div className='testimonial-content'>
        <div className='testimonial-info'>
          <p>
            <span>@</span> {name}
          </p>
          <p className='testimonial-company-name'>{designation} of {company}</p>
        </div>

        <img
          src={image}
          alt={`Feedback-by-${name}`}
        />
      </div>
    </div>
  </motion.div>
  )

const Feedbacks = () => {
  return (
    <div className='testimonials'>
      <div className={`${styles.padding} feedback-div`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} testimonial-card`}>
        {testimonials.map((testimonial, index)=>(
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,'');