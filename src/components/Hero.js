import "../components/utility/Hero.css";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import {  FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-1">
            <div className="hero-11"><p>Full-Stack </p></div>
            <div className="project-link"><button className="project-link-1" ><a href="#projects"><i>Projects</i></a></button>
            <button className="project-link-2"><a href="#projects"><FaArrowRight />
            </a></button>
            </div>
        </div>
        
        <div className="hero-2"> 
            <div className="my-goal"><p>My goal is to <i>write maintainable, clean</i></p>
            <p>and <i>understandable code</i> to process</p>
            <p>development was enjoyable.</p>
            </div>
            <div className="hero-22"><p>Developer</p></div>
        </div>

        {/* Social Media Icons */}

    <div className="social-icons">
         <a href="https://github.com/Hansraj-GitHub " target="_blank" rel="noopener noreferrer">
         <FaGithub /><p>Github</p>
         </a>
        <a href="https://www.linkedin.com/in/hansraj-yadav-ba3908278/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /><p>linkedin</p>
        </a>
        <a href="https://t.me/hansrajtg" target="_blank" rel="noopener noreferrer">
         <FaTelegram /><p>Telegram</p>
        </a>
        <a href="https://www.instagram.com/hansraj_ydv/" target="_blank" rel="noopener noreferrer">
         <FaInstagram /><p>instagram</p>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007322954853" target="_blank" rel="noopener noreferrer">
        <FaFacebook /><p>facebook</p>
        </a>
    </div>
    <div className="arrow-box">
  <span className="arrow">&#8595;</span>
</div>


      </div>
    </section>
  );
}

export default Hero;
