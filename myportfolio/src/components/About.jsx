import React from 'react'
import { Link } from 'react-router-dom'


const experiences = [
  {
    company: "Tech Innovations",
    position: "As a Frontend Developer",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Developed user interfaces with React.",
      "Collaborated with cross-functional teams.",
      "Optimized web performance and accessibility.",
    ],
  },
  {
    company: "Creative Solutions",
    position: "As a Frontend Developer",
    duration: "Jul 2020 - Dec 2021",
    responsibilities: [
      "Built responsive and interactive components.",
      "Worked closely with backend developers.",
      "Improved code quality and best practices.",
    ],
  },

  {
    company: "Tech Innovations",
    position: "As a Frontend Developer",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Developed user interfaces with React.",
      "Collaborated with cross-functional teams.",
      "Optimized web performance and accessibility.",
    ],
  },
 
];

const About = () => {
  return (

    <>
      {/* <img src="./Assets/img/my-bg-2.JPG" className="mx-auto mb-4 profile-img" alt="profile" /> */}

      <section className="about-section  ">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-12 ">
              <div className="card  bg-dark text-center text-light border-0 p-4">
                <h2 className="card-title fs-3 mb-3">About Me</h2>
                <img src="./Assets/img/my-bg-2.JPG" className="mx-auto mb-2 mt-3 profile-img" alt="profile" />
                <div className="social-icons mt-2">
                  <Link to="https://github.com/RaviGahire" target='/' className='icon bg-dark' aria-label="Facebook"><i class="ri-github-fill" title='Github'></i></Link>
                  <Link to="https://x.com/RaviGahire" target='/' className='icon' aria-label="Twitter"><i class="ri-twitter-x-line" title='twitter'></i></Link>
                  <Link to="https://www.linkedin.com/in/ravi-gahire-7855b110a/" target='/' className='icon' aria-label="LinkedIn"><i class="ri-linkedin-box-line" title='linkedin'></i></Link>
                </div>
                {/* devider div */}
                <div className="card"></div>
                <div className="my-3">
                  <h3 className='mb-2'>Curious about me..? Here you have it </h3>
                  <div className="mb-2 p-2"> <span className='arrow'><i class="ri-arrow-down-line"></i></span></div>
                  <div className="text-light">
                    <p className='my-2 lead line-height p-1'>Hello..! I'm Ravi Gahire, a passionate developer with a love for creating beautiful and functional web applications. I specialize in front-end development and constantly learn new technologies to enhance my skills and deliver top-quality work.
                    </p>
                  </div>
                  <div className=" content-center">
                    <div className="col-md-8 text-light my-3 px-1">
                      <p className='fw-light line-height'>I began my journey as a web developer in 2022, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.
                        I'm building cutting-edge web applications using modern technologies such as React.js, Javascript, Node.js, and much more.</p>
                      <p className='fw-light line-height'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card"></div>
          <div className="education-section m-2">
            <h3 className=' text-center text-light'>Finally, some quick bits about me..</h3>
            <div className="row content-center text-light my-2 px-4">
              <div className="col-md-4  ">
                <ul className='mb-2 fw-light fs-5  text-left m-2'>
                  <li>MCA <span></span></li>
                  <li>Avid learner</li>
                </ul>
              </div>
              <div className="col-md-4 text-light">
                <ul className='mb-2 fw-light fs-5 text-left m-2'>
                  <li>Full time freelancer</li>
                  <li>github collaborator & contributor</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Skill section */}
          <div className="card mx-5"></div>
          <div className="row justify-content-center mt-5">
            <h3 className="fw-bold mb-4 Skills text-light text-center">My Skills</h3>
            <div className="col-lg-10">
              <div className="card text-center border-0 shadow-sm p-5 bg-gradient bg-dark text-white">
                <div className="row text-center">
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-warning text-white shadow-sm JavaScript">
                      <i className="fab fa-js-square fa-2x mb-2"></i>
                      <h5 className="fw-bold">JavaScript</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-success text-white shadow-sm Node">
                      <i className="fab fa-node fa-2x mb-2"></i>
                      <h5 className="fw-bold">Node.js</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-danger text-white shadow-sm html">
                      <i className="fab fa-html5 fa-2x mb-2"></i>
                      <h5 className="fw-bold">HTML</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-primary  text-white shadow-sm css">
                      <i className="fab fa-css3-alt fa-2x mb-2"></i>
                      <h5 className="fw-bold">CSS</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-info text-white shadow-sm reactjs">
                      <i className="fab fa-react fa-2x mb-2"></i>
                      <h5 className="fw-bold">React.js</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-bootstrap text-white shadow-sm css">
                      <i className="fab fa-css3-alt fa-2x mb-2"></i>
                      <h5 className="fw-bold">Bootstrap </h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-git text-white shadow-sm css">
                      <i className="fab fa-css3-alt fa-2x mb-2"></i>
                      <h5 className="fw-bold">Git</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-mongo text-white shadow-sm css">
                      <i className="fab fa-css3-alt fa-2x mb-2"></i>
                      <h5 className="fw-bold">MongoDB</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* work experience section  */}
        <div className="container mt-5">
      <h2 className="text-center mb-4 text-light">Work Experience</h2>
      <div className="row">
        {experiences.map((experience, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card border-light">
              <div className="card-body">
                <h5 className="card-title">{experience.position}</h5>
                <h6 className="card-subtitle text-muted">{experience.company}</h6>
                {/* <p className="card-text"><strong>Duration:</strong> {experience.duration}</p> */}
                <p>Duration : {experience.duration}</p>
              
                <ul className="list-unstyled">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx}><i class="ri-code-s-slash-line"></i> {item}</li>
                  ))}
                </ul>
<span><Link to="" target='/'><i class="ri-external-link-fill"></i></Link></span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      </section>
    </>

  )
}

export default About
