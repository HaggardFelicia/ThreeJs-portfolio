import {useState, useRef  } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    // 3D_Portfolio_Reply (emailjs template id)
    // 3D_Portfolio (emailjs service id)
    // fGQVJ5pDNBYUOF_cU (emailjs public key)
    // service,template,options,public key
    emailjs.send(
      '3D_Portfolio',
      '3D_Portfolio_Reply',
      {
        form_name: form.name,
        to_name: 'Felicia Haggard',
        from_email: form.email,
        to_email: 'haggardwebdev@gmail.com',
        message: form.message,
      },
      'fGQVJ5pDNBYUOF_cU'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible!');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error)=>{
      setLoading(false);
      console.log(error);
      alert('Uh oh something went wrong!');
    })
  };

  return (
    <div className='contact'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='contact-motion-div'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form-container'
        >
          <label>
            <span>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className=''
            />
          </label>

          <label>
            <span>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className=''
            />
          </label>

          <label>
            <span>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className=''
            />
          </label>

          <button
            type='submit'
          >
            {loading ? 'sending...' : 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='Earth-Canvas-Div'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');