import React, { useState } from "react";
import '../custom-css-files/contact.css'
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
    <div className="container mt-5">
      {/* Contact Form Section */}
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Social Icons Section */}
      <div className="mt-5 text-center">
        <h4>Follow Us</h4>
        <div className="d-flex justify-content-center mt-3">
        <Link to="https://www.facebook.com/ravi.gahire" target='/' className='icon' aria-label="Facebook"><i class="ri-facebook-circle-line"></i></Link>
                            <Link to="https://x.com/RaviGahire" target='/' className='icon' aria-label="Twitter"><i class="ri-twitter-x-line"></i></Link>
                            <Link to="" target='/' className='icon' aria-label="Instagram"><i class="ri-instagram-line"></i></Link>
                            <Link to="https://www.linkedin.com/in/ravi-gahire-7855b110a/" target='/' className='icon' aria-label="LinkedIn"><i class="ri-linkedin-box-line"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

