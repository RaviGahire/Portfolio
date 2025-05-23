import React from 'react'






const projects = [
   {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience.",
    technologies: ["React", "Bootstrap"],
    image: "/Assets/img/portfolio.png",
    link: "#",
  },
  {
    title: "Focus On Today",
    description: "Focus on Today is a simple and intuitive to-do list web application designed to help users set and complete their daily goals efficiently. Unlike traditional to-do apps.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    image: "/Assets/img/focusontody.png", 
    link: "#", // Link to the project demo or GitHub repository
  },
  {
    title: "E-commerce Platform",
    description: "An online platform for purchasing products with a user-friendly interface and secure payment options.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1PZvnLdVS0dKqROhOPb5WWpRnjtkjDTPJA&s",
    link: "#",
  },
 
];

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Innovations",
    feedback:
      "This team delivered exceptional results, exceeding our expectations and completing the project on time.",
    image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jane Smith",
    role: "Project Manager, Creative Solutions",
    feedback:
      "A highly skilled developer who always goes the extra mile to ensure the project's success.",
      image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
  {
    name: "Sarah Lee",
    role: "Lead Designer, Design Co.",
    feedback:
      "Fantastic to work with! The project was completed with professionalism and attention to detail.",
      image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
];


const Work = () => {
  return (
    <>
    <div className=" project-section">
      <div className="container">
    <div className="custom-bg"><h2>projects</h2></div>
        <h6 className='mt-2 mb-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptas.</h6>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card bg-none h-100 ">
                <h5 className="card-title text-warning text-center">{project.title}</h5>
                <div className="card-body  ">
                  {/* Project Image */}
                  <img src={project.image} className="card-img-top img-fluid h-50" alt={project.title}/>
                  <p className="text-secondary ">{project.description}</p>
                  <p><strong className='text-warning'>Technologies:</strong> <span className='text-secondary'>{project.technologies.join(", ")}</span></p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* testimonial Section */}
      <div className="container mt-5 mb-5">
        <div className="custom-bg">
      <h2 className="text-center mb-4 ">Testimonial</h2>
      </div>
        <h5 className="text-center mb-4 ">What my Clients Say</h5>
        <div id="testimonialCarousel" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={` carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="text-center">
                  <img
                    src={testimonial.image}
                    className="rounded-circle mb-3"
                    alt={testimonial.name}
                    style={{ width: "250px", height: "250px" }}
                  />
                  <p>{testimonial.feedback}</p>
                  <h5>{testimonial.name}</h5>
                  <h6 className=" ">{testimonial.role}</h6>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Work
