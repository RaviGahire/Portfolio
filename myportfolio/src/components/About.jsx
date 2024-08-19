import React from 'react'
import { Link } from 'react-router-dom'
import '../custom-css-files/about.css'



const About = () => {
  return (
    <>
      <section id='about-section'>

        <div className="about-text">
          <h1>About Me</h1>
        </div>
        <div className="about-container">
          <div className="about-info"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eum aliquam. Beatae error nisi, quisquam officiis porro temporibus quidem eius unde delectus reiciendis maiores cum autem eveniet tenetur illo atque.</p></div>
          <div className="about-svg"><img src="/Assets/svg/Aboutme.svg" alt="" /></div>
        </div>

        <div className="about-container-1">
          <div className="img-side">


          </div>
          <div className="skills-side">
            <div className="skills-inner">

              <div className="text-area">
                <div className="text-h2"> <h2>My-Info</h2></div>
                <div className="para-area">

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores


                  </p>

                </div>
                <div className="btns">
                  <button class="button">Get in touch</button>
                  <button class="button">Call Me</button>
                </div>

              </div>
              <div className="skill-info">
                <div className="skill-heading"><h2>Skills</h2></div>
                <div className="front-end-heading">Front-End</div>
                <div className="front-end">
                  <Link className='anchor'><li>HTML</li></Link>
                  <Link className='anchor'><li>Css</li></Link>
                  <Link className='anchor'><li>Bootstrap</li></Link>
                  <Link className='anchor'><li>JavaScript</li></Link>
                  <Link className='anchor'><li>React Js</li></Link>
                </div>
                <div className="front-end-heading">Back-End</div>
                <div className="back-end">

                  <Link className='anchor' ><li>Node Js</li></Link>
                  <Link className='anchor' ><li>Mongo DB</li></Link>
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
