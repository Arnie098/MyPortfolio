import React from 'react';
import './Project.css';
import flickImg from './assets/images/Flick/flick.jpg';
import flickIcon from './assets/images/Flick/FlickIcon.png';
import Face1 from './assets/images/FaceRecognition/Screenshot final 1.png';
import Face2 from './assets/images/FaceRecognition/Screenshot final2.png';
import Face3 from './assets/images/FaceRecognition/Screenshot final3.png';
import Face4 from './assets/images/FaceRecognition/Screenshot final 4.png';
import Bible1 from './assets/images/BibleDesktopApp/Image1.png';
import Bible2 from './assets/images/BibleDesktopApp/Image2.png';
import flickImg1 from './assets/images/Flick/1.jpg';
import flickImg3 from './assets/images/Flick/3.jpg';
import flickImg4 from './assets/images/Flick/4.jpg';
import flickImg7 from './assets/images/Flick/7.jpg';
import flickImg8 from './assets/images/Flick/8.jpg';
import flickImg9 from './assets/images/Flick/9.jpg';
import flickImg10 from './assets/images/Flick/10.jpg';
import flickImg11 from './assets/images/Flick/11.jpg';
import flickImg12 from './assets/images/Flick/12.jpg';
import flickImg13 from './assets/images/Flick/13.jpg';
import flickImg14 from './assets/images/Flick/14.jpg';



const projects = [
  {
    title: "Flick-QRcodeAttendance (my best system so far)",
    description: `A cross-platform QR-based attendance app built with React Native and SQLite for offline record storage, 
    with a Dockerized FastAPI backend deployed on Azure for login sessions and email verification.`,
    images: [flickImg,flickIcon,flickImg1,flickImg3,flickImg4,flickImg7,flickImg8,flickImg9,flickImg10,flickImg11,flickImg12,flickImg13,flickImg14],
    link: "https://github.com/Arnie098/QRScannerAttendance",
  },
  {
    title: "BibleExpose",
    description: `A fullscreen Bible reading and projection desktop app built with React, featuring Bisaya(Filipino Native language) and KJV translations built for simplicity and convenience.`,
    images: [Bible1,Bible2],
    link: "https://github.com/Arnie098/BisayaBibleDesktopApp",
  },
  {
    title: "FaceAttendance",
    description: "FaceAttendance is a AI powered web-based attendance tracking system that uses facial recognition to automate and simplify the process of logging attendance. Built with React.js on the frontend and FastAPI on the backend, this project focuses on usability, efficiency, and accuracy.",
    images: [Face1,Face2,Face3,Face4],
    link: "https://github.com/Arnie098/Face-Recognition-Frontend",
  }
];

const Project = () => {
  return (
    <section id="projects" className="project-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-5">My Projects</h2>
        <div className="row">
         {projects.map((project, index) => (
  <div className="col-md-4 col-sm-6 mb-4" key={index}>
    <div className="card h-100 project-card">
      
      <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {project.images.map((img, imgIndex) => (
            <div
              className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}
              key={imgIndex}
            >
              <img
                src={img}
                className="d-block w-100 project-image"
                alt={`${project.title} screenshot ${imgIndex + 1}`}
              />
            </div>
          ))}
        </div>

        {project.images.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carousel-${index}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carousel-${index}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
        <br />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn mt-auto custom-btn">
          View Project
        </a>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Project;
