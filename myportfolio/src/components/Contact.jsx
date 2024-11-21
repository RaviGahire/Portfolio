import React, { useState } from "react";
import { Link } from 'react-router-dom'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form Submitted!");
  };

  return (
    <>
<div className="contact-section">


      <div className="container  w-50">
      <h1 className="fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi non quis temporibus, asperiores tenetur eius minus eligendi quos adipisci!
      </h1>
        {/* Contact Form Section */}
        <h2 className="text-center mb-4 ">Contact Me </h2>
        <div className="row">
          <div className=" bg-gradient shadow-lg rounded">
          <form onSubmit={handleSubmit} >
            <div className="mb-3 px-5 my-4">
              <label htmlFor="name" className="form-label "> Full Name </label>
              <input
                type="text"
                className="form-control  "
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Legal Name"
              />
            </div>

            <div className="mb-3 px-5 my-4">
              <label htmlFor="email" className="form-label">Email</label>
             
              
              <input
                type="email"
                className="form-control  "
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Personal Email"
              />
            </div>

            <div className="mb-3 px-5 my-4">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control  "
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
           <div className="text-center">
           <button type="submit" className="btn btn-primary px-5 my-4 ">
              Submit
            </button>
           </div>
          </form>
          </div>
          <div className="container my-5 bg-gradient rounded">
            <div className="row justify-content-center">
              <span className="  text-center">
                <span className="fs-3"><i class="ri-map-pin-line"></i></span>
                <h5><Link style={{textDecoration:"none",fontSize:'24px'}}  to='https://www.google.com/maps/place/Pune,+Maharashtra/@18.5245986,73.7805655,12z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D' target="./">Pune</Link></h5>
              </span>
              <div className="">
                <p className="text-center my-1 lead fw-medium" style={{fontSize:'19px', lineHeight:'24px'}}>What’s next..? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
                <ul className="text-center list-unstyled m-5 fs-5" >
                  <li className="mb-2"> <i class="ri-mail-line mx-2"></i>ravigahire3@gmail.com <i class="ri-file-copy-line"></i></li>
                  <li className=""><i class="ri-smartphone-line mx-1"></i>+91-8788989719 <i class="ri-file-copy-line"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Social Icons Section */}
        <div className="mt-5 text-center">
          <h4 className="">Follow Me</h4>
          <div className="d-flex justify-content-center mt-3">
            <Link to="https://www.facebook.com/ravi.gahire" target='/' className='icon' aria-label="Facebook"><i class="ri-facebook-circle-line"></i></Link>
            <Link to="https://x.com/RaviGahire" target='/' className='icon' aria-label="Twitter"><i class="ri-twitter-x-line"></i></Link>
            <Link to="" target='/' className='icon' aria-label="Instagram"><i class="ri-instagram-line"></i></Link>
            <Link to="https://www.linkedin.com/in/ravi-gahire-7855b110a/" target='/' className='icon' aria-label="LinkedIn"><i class="ri-linkedin-box-line"></i></Link>
          </div>
        </div>
      </div>

      </div>
    </>


    
  );
};

export default Contact;

