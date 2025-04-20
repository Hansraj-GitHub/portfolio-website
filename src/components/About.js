import "../components/utility/About.css";
import coverImg from "../components/utility/photo.jpeg"



function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <div className="about-heading1"><h3>. . . / About  me . . .</h3></div>
        <div className="about-heading2"><p>Hello ! I'm Hansraj, I'am a <i>full-stack developer</i> in modern web technologies.</p></div>
      </div>

      
      <div className="container">
        <div className="left-side">
        <div className="section1">
          <p className="p1">Front-end</p>
          <p>JavaScript / React / Redux Toolkit / Context API /</p>
          <p>TypeScript / NextJs / React Native / Jest</p>
        </div>
        <div className="section2">
          <div className="section21">
            <p className="section21-p1">Styles</p>
            <p>SCSS / SASS / Tailwind CSS /</p>
            <p>Material UI / MediaQueries / Flex</p>
          </div>
          <div className="section22">
              
          </div>
        </div>
        <div className="section3">
        <p className="section3-p1">Back-end</p>
          <p>NodeJs / ExpressJs / MongoDB / MySQL /</p>
          <p>PostgreSQL / Microservices / </p>
        </div>
        <div className="section4">
          <div className="section41">
            <p>Some of my <i>favorite technologies,</i></p>
            <p><i>topics, or tools </i>that i worked with</p>
          </div>
          <div className="section42">
            <p>Language : <i>C, Java , Python </i></p>
            <p>Tool : <i>Git , Github , Discord</i></p>
          </div>
        </div>
      </div>
        <div className="right-side">
        <img src={coverImg} alt="Profile" className="profile-img"/>
        </div>
      </div>
      <div className="arrow-box">
        <span className="arrow">&#8595;</span>
      </div> 
    </section>
  );
}

export default About;

