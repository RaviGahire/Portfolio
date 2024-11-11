import React from 'react'
import { Link } from 'react-router-dom'
import '../custom-css-files/about.css'



const About = () => {
  return (

    <>
      {/* <img src="./Assets/img/my-bg-2.JPG" className="mx-auto mb-4 profile-img" alt="profile" /> */}

      <section className="about-section py-2 bg-dark">
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
                <div className="card"></div>

                <div className="my-3">
                  <h3 className='mb-2'>Curious about me..? Here you have it </h3>
                  <div className="mb-2 p-2"> <span className='arrow'><i class="ri-arrow-down-line"></i></span></div>
                  <div className="card-text text-light">
                    <p className='my-2 fs-5 lead'>Hello! I'm Ravi Gahire, a passionate developer with a love for creating beautiful and functional web applications. I specialize in front-end development and constantly learn new technologies to enhance my skills and deliver top-quality work.
                    </p>
                  </div>

                  <div className="card-text-2 mt-3">
                    <p className='text-sm-start text-md-start text-wrap'><b className='text-warning fs-4'>I am</b> began my journey as a web developer in 2022, and since then, I've continued to grow and evolve as a developer,
                      taking on new challenges and learning the latest technologies along the way.
                      I'm building cutting-edge web applications using modern technologies such as React.js, Tailwindcss, Node.js and much more.</p>
                    <p><b className='text-warning fs-4'>I am</b> very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>

                  </div>


                </div>

              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="card text-center border-0 shadow-sm p-5 bg-gradient bg-primary text-white">
                <h3 className="fw-bold mb-4 Skills">Skills</h3>
                <div className="row text-center">
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-warning text-primary shadow-sm JavaScript">
                      <i className="fab fa-js-square fa-2x mb-2"></i>
                      <h5 className="fw-bold">JavaScript</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-white text-primary shadow-sm Node">
                      <i className="fab fa-node fa-2x mb-2"></i>
                      <h5 className="fw-bold">Node.js</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-white text-primary shadow-sm html">
                      <i className="fab fa-html5 fa-2x mb-2"></i>
                      <h5 className="fw-bold">HTML</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-white text-primary shadow-sm css">
                      <i className="fab fa-css3-alt fa-2x mb-2"></i>
                      <h5 className="fw-bold">CSS</h5>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 mb-4">
                    <div className="p-3 rounded bg-white text-primary shadow-sm reactjs">
                      <i className="fab fa-react fa-2x mb-2"></i>
                      <h5 className="fw-bold">React.js</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







    </>

  )
}

export default About
