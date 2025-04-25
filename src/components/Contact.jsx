import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, 
        {
          from_name: form.name,
          to_name: "Felicia Haggard",
          from_email: form.email,
          to_email: "haggardwebdev@gmail.com",
          message: form.message,
        }, import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Uh oh, something went wrong. Please try again!");
        }
      );
  };

  return (
    <div
      className='contact'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='contact-motion-div'
      >
        <p className={'sectionSubText'}>Get in touch</p>
        <h3 className={'sectionHeadText'}>Contact.</h3>

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
            />
          </label>
          <label>
            <span>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
            />
          </label>
          <label>
            <span>Your Message</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
            />
          </label>

          <button
            type='submit'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='Earth-Canvas-Div'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");