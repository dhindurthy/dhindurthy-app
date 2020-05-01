import React, {useState} from "react";


function Services(props) {
  const [active, setActive] = useState('about');
  const navItems = [
    {key:"about",label:"About", link:"services#about"},
    {key:"skills",label:"Skills", link:"services#skills"},
    {key:"specializations",label:"Speciality", link:"services#specializations"},
    {key:"collaboration",label:"Collaboration", link:"services#collaboration"}]
  return (
    <section className="services-page">
      <h1 className="main-page-heading">
        Dhiraj and his Work, Services, Specialization
      </h1>
      
      <section className="about-section">
        <section className="about-paras" id="about" onMouseEnter={() => setActive('about')}>
          <h2>About</h2>
          <p tabIndex="0">
           Hello, I am Dhiraj Indurthy, a self-taught programmer with a master’s degree 
           in engineering. I’ve worked in planning, building, testing, and maintaining 
           user interfaces covering a wide range of content: retail, educational, personal, 
           financial, corporate, and small business. I have over 7 years of experience 
           writing elegant and efficient code featuring multi-device compatibility (desktop/ tablet/ mobile).
          </p>
          <p tabIndex="0">
            I am very passionate about web accessibility. All users deserve access to web 
            content regardless of their ability, and I take pride in providing accommodation 
            through innovation. This work focuses on users who have visual, auditory, motor, 
            and cognitive disabilities of all types and severities. It is also important to me 
            to contribute to the profession by advancing the significance of web accessibility 
            and mentoring other designers and developers in its development and application. 
            You are always welcome to get in touch to strike up a conversation about web accessibility.
          </p>
        </section>
        <section className="collab-paras">
          <section id="skills" onMouseEnter={() => setActive('skills')}>
            <h2>Skills</h2>
            <ul tabIndex="0" >
              <li>User Interface Implementation</li>
              <li>Testing and Maintaining Websites</li>
              <li>Website Consultation</li>
            </ul>
          </section>
          <section id="specializations" onMouseEnter={() => setActive('specializations')}>
            <h2>Specializations</h2>
            <dl tabIndex="0">
              <dt>Web Accessibility:</dt>
              <dd>Screen Reader Compatibility</dd>
              <dd>Keyboard Navigation</dd>
              <dd>Color Contrast</dd>
              <dd>Text Zoom and many more</dd>
              <dt>Accessibility Standards:</dt>
              <dd>WCAG 2.0</dd>
              <dd>WAI ARIA</dd>
              <dt>ADA Compliance Testing</dt>
            </dl>
          </section>
          <section id="collaboration" onMouseEnter={() => setActive('collaboration')}>
            <h2>Collaboration</h2>
            <p tabIndex="0" >
              Please visit my{" "}
              <a
                className="inline-link"
                href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              for more details regarding technology stacks and
              institutions dealt with in the past. You are invited to contact me if you think
              I would be a good match to team up for your project requiring any of
              the mentioned skills and the specializations.
            </p>
          </section>
        </section>
      </section>

      <nav className="section-nav">
        <ul role="menubar" >
        {navItems.map(navItem => 
          <li role="presentation">
            <a className={active === navItem.key ? 'hover-style' : ''} 
            href={navItem.link}>{navItem.label}</a>
          </li>
          )}
        </ul>
      </nav>
    </section>
  );
}

export default Services;
