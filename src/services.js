import React, {useState} from "react";

function Services(props) {
  const [active, setActive] = useState('about');
  const navItems = [
    {key:"about",label:"About", link:"profile#about"},
    {key:"skills",label:"Skills", link:"profile#skills"},
    {key:"specializations",label:"Specialities", link:"profile#specializations"},
    {key:"collaboration",label:"Collaboration", link:"profile#collaboration"},
    {key:"tech",label:"Technologies", link:"profile#tech"}]
  
  return (
    <section className="services-page" id="services-page">
      <h1 className="main-page-heading">
        About Dhiraj and his Work, Services, Specialization.
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
            I am very passionate about 
            <a
              className="inline-link"
              href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
              rel="noopener noreferrer"
              target="_blank">web accessibility</a>. All users deserve access to web 
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
              <dt>Web Accessibility(a11y):</dt>
              <dd>Screen Reader Compatibility</dd>
              <dd>Keyboard Navigation</dd>
              <dd>Color Contrast</dd>
              <dd>Text Zoom and many more</dd>
              <dt>Accessibility Standards:</dt>
              <dd>
                <a
                  className="inline-link"
                  href="https://www.w3.org/TR/WCAG20/"
                  rel="noopener noreferrer"
                  target="_blank">WCAG 2.0</a> AAA Conformance
              </dd>
              <dd>
                <a className="inline-link"
                  href="https://www.w3.org/TR/wai-aria-1.1/WAI ARIA"
                  rel="noopener noreferrer"
                  target="_blank">WAI ARIA</a>
              </dd>
              <dt>ADA Compliance Testing</dt>
            </dl>
            <p>...and yes, this website has all the above features.</p>
          </section>
          <section id="collaboration" onMouseEnter={() => setActive('collaboration')}>
            <h2>Collaboration</h2>
            <p tabIndex="0" >
              Please visit my
              <a
                className="inline-link"
                href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
                rel="noopener noreferrer"
                target="_blank">LinkedIn</a>
                for in-depth details of technology stacks and institutions dealt 
              with in the past, and request for a copy of my resume for further details.  
              You can see some of my 
              <a
                className="inline-link"
                style={{textDecoration: 'underline'}}
                tabIndex="0"
                role="menuitem"
                href="/codesamples">code samples</a>
                here or visit my coding profiles provided in the bottom left menu. 
                Feel free to grab a snippet if you deem it useful.
            </p>
            <p>
                Let me know if you think I would be a good match to team up for your 
                project requiring any of the mentioned 
                  <a
                  className="inline-link"
                  style={{textDecoration: 'underline'}}
                  tabIndex="0"
                  role="menuitem"
                  href="/profile#skills">skills</a>
                  and/or 
                  <a
                  className="inline-link"
                  style={{textDecoration: 'underline'}}
                  tabIndex="0"
                  role="menuitem"
                  href="/profile#specializations">specializations</a>.
            </p>
          </section>
          <section id="tech" onMouseEnter={() => setActive('tech')}>
            <h2>Technologies</h2>
            <p tabIndex="0">JavaScript, HTML5, CSS3, ReactJS, EmberJS, AngularJS,
                React Native and of course Accessibility(a11y).
                Please visit my
                <a
                className="inline-link"
                href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
                rel="noopener noreferrer"
                target="_blank">LinkedIn</a>
              for more details on rest of the technologies I have been working with.
            </p>
          </section>
        </section>
      </section>

      <nav className="section-nav">
        <ul role="menubar" >
        {navItems.map(navItem => 
          <li role="presentation">
            <a role="menuitem" 
            onClick={() => setActive(navItem.key)}
            className={active === navItem.key ? 'hover-style' : ''} 
            href={navItem.link}>{navItem.label}</a>
          </li>
          )}
        </ul>
      </nav>
    </section>
  );
}

export default Services;
