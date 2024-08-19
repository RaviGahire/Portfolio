import React from 'react'
import '../custom-css-files/contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <section id="contact-section">
        <div className="contact-heading">
          <h1>contact me</h1>
          <p>feel free to contact me </p>
        </div>
        <div className="top-container">


          <form className="form">
            <p className="title">Get in touch with me <i class="ri-megaphone-line"></i></p>

            <div className="flex">
              <label>
                <input className="input" type="text" placeholder="" required="" />
                <span>Firstname</span>
              </label>

              <label>
                <input className="input" type="text" placeholder="" required="" />
                <span>Lastname</span>
              </label>
            </div>

            <label>
              <input className="input" type="email" placeholder="" required="" />
              <span>Email</span>
            </label>


            <label>
              <textarea className="input" type="password" placeholder="" required="" />
              <span>Comments</span>
            </label>
            <button className="submit">Send Me</button>

          </form>
          <div className="map-side">
            <div className="address">
              <address>
                <i class="ri-map-pin-line"></i>
                Dy Patil College Road <br />
                Akurdi Pune MH 144035

              </address>
               <div className="social-icons">
                <Link className='anchor' to="google.com" target='_blank'>
                <i class="ri-facebook-fill"></i>
                </Link>
                <Link className='anchor' to="google.com" target='_blank'> <i class="ri-instagram-fill"></i></Link>
                <Link className='anchor' to="google.com" target='_blank'>  <i class="ri-twitter-fill"></i></Link>
                <Link className='anchor' to="google.com" target='_blank'>  <i class="ri-github-fill"></i></Link>
               
              
              
              </div> 
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15121.420715184955!2d73.75955285!3d18.6480511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716219186863!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>

        </div>

      </section>



    </>
  )
}

export default Contact
