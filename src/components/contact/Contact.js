import React,{useRef} from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t50t48v', 'template_ch16weg', form.current, 'jV_UOyF23to3PgdZp')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>Email</h5>
            <h6 className="contact__info">yadavvishal560@gmail.com</h6>
            <a href="mailto:yadavvishal560@gmail.com" target="_blank" rel="nofollow noopener noreferrer">Send a message </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h5>Whatsapp</h5>
            <h6 className="contact__info">9619123947</h6>
            <a href="https://api.whatsapp.com/send?phone=919619123947" target="_blank" rel="nofollow noopener noreferrer">Send a message </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required
/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
