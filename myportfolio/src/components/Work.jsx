import React from 'react'
import '../custom-css-files/work.css'

const projects = [
  {
    title: "Saving Bank Management System",
    description: "A web application to manage bank accounts, transactions, and user information. Built using HTML, CSS, JavaScript, and Bootstrap.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://via.placeholder.com/300x200", // Replace with your image URL or local image
    link: "#", // Link to the project demo or GitHub repository
  },
  {
    title: "E-commerce Platform",
    description: "An online platform for purchasing products with a user-friendly interface and secure payment options.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience.",
    technologies: ["React", "Bootstrap"],
    image: "https://via.placeholder.com/300x200",
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
      <div className="container mt-5 ">
        <h2 className="text-center mb-4 text-light">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100">


                <h5 className="card-title">{project.title}</h5>
                <div className="card-body">
                  {/* Project Image */}
                  <img src={project.image} className="card-img-top text-dark zindex-1" alt={project.title} />
                  <p className="text-info">{project.description}</p>
                  <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
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
      <h2 className="text-center mb-4 text-light">Testimonial</h2>
        <h5 className="text-center mb-4 text-light">What my Clients Say</h5>
        <div id="testimonialCarousel" className="carousel slide text-light" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`text-light carousel-item ${index === 0 ? "active" : ""}`}
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
                  <h6 className=" text-light">{testimonial.role}</h6>
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

    </>
  )
}

export default Work
