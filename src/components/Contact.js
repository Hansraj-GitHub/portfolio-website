import "../components/utility/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact Me</h2>
        <p>Send me a message. I'll get back soon.</p>
        <form
        action="https://formspree.io/f/xnnpedbn"
        method="POST"
         className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
    </form>
      </motion.div>
      
    </section>
  );
}

export default Contact;
