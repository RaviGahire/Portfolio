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

      <section className="about-section">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-12 ">
              <div className=" text-center border-0 p-4">
              <div className="custom-bg">
              <h2 >About Me</h2>
              </div>
                <img src="./Assets/img/my-bg-2.JPG" className="mx-auto mb-2 mt-3 profile-img" alt="profile" />
                <div className="social-icons mt-2">
                  <Link to="https://github.com/RaviGahire" target='/' className='icon ' aria-label="Facebook"><i class="ri-github-fill" title='Github'></i></Link>
                  <Link to="https://x.com/RaviGahire" target='/' className='icon' aria-label="Twitter"><i class="ri-twitter-x-line" title='twitter'></i></Link>
                  <Link to="https://www.linkedin.com/in/ravi-gahire-7855b110a/" target='/' className='icon' aria-label="LinkedIn"><i class="ri-linkedin-box-line" title='linkedin'></i></Link>
                </div>
                {/* devider div */}
                <h3 className='mb-2'>Curious about me..? Here you have it </h3>
                <div className="card"></div>
                <div className="my-2">
                  <div className="mb-2"> <span className='arrow'><i class="ri-arrow-down-line"></i></span></div>
                  <div className="">
                    <p className='my-2 lead line-height fw-normal p-1'>Hello..! I'm Ravi Gahire, a passionate developer with a love for creating beautiful and functional web applications. I specialize in front-end development and constantly learn new technologies to enhance my skills and deliver top-quality work.
                    </p>
                  </div>
                  <div className="content-center">
                    <div className="col-md-8 my-3 px-1">
                      <p className=' fw-medium line-height'>I began my journey as a web developer in 2022, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.
                        I'm building cutting-edge web applications using modern technologies such as React.js, Javascript, Node.js, and much more.</p>
                      <p className='fw-medium line-height'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card"></div>
          <div className="education-section m-2">
            <h3 className=' text-center '>Finally, some quick bits about me..</h3>
            <div className="row content-center  my-2 px-4">
              <div className="col-md-4  ">
                <ul className='mb-2 fw-light fs-5  text-left m-2'>
                  <li>MCA <span></span></li>
                  <li>Avid learner</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className='mb-2 fw-light fs-5 text-left m-2'>
                  <li>Full time freelancer</li>
                  <li>github collaborator & contributor</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Skill section */}
          <div className=" mx-5"></div>
          <div className="row justify-content-center mt-5">
          <div className="custom-bg">
              <h2 >My skills</h2>
              </div>
            <h5 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quas.
            </h5>
            <div className="col-lg-10">
              <div className=" text-center border-0 shadow-lg p-5 bg-gradient text-white">
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
        <div className="custom-bg mb-3">  <h2>Work Experience</h2></div>
          <div className="row">
            {experiences.map((experience, index) => (
              <div className="col-md-4 mb-3 " key={index}>
                <div className=" card bg-none border-light shadow-lg   ">
                  <div className="card-body">
                    <h5 className="card-title text-warning ">{experience.position}</h5>
                    <h6 className="card-subtitle text-secondary my-1">{experience.company}</h6>
                    <p className='text-info'>Duration : {experience.duration}</p>
                    <ul className="list-unstyled text-secondary mb-0">
                      {experience.responsibilities.map((item, idx) => (
                        <li key={idx}><i class="ri-code-s-slash-line mx-1"></i> {item}</li>
                      ))}
                    </ul>
                  <div className="link-icon"> <Link to="" target='/' className='text-decoration-none   fs-4'><i class="ri-external-link-fill text-center "></i></Link></div>
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
