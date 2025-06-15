import React from 'react';
import './About.css';
import myImage from './assets/profile.png';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
             <img
              src={myImage}
               className="img-fluid flipped-img"
              alt="Arnie Que"
            />
          </div>
          <div className="col-lg-7">
            <p>
             A passionate developer that can adapt in technological advancement.
            </p>
            <ul className="about-info mt-4 px-md-0 px-2">
              <li className="d-flex"><span>Name:</span> <span>Arnieque Amaba</span></li>
              <li className="d-flex"><span>Date of birth:</span> <span>July 30, 2024</span></li>
              <li className="d-flex"><span>Address:</span> <span>Philippines</span></li>
              <li className="d-flex"><span>Zip code:</span> <span>8002</span></li>
              <li className="d-flex"><span>Email:</span> <span>kikoy12345amaba@gmail.com</span></li>
              <li className="d-flex"><span>Phone:</span> <span>+63 9916694076</span></li>
            </ul>
            <div className="counter-wrap d-flex mt-4">
              <div className="text">
                <p className="mb-2 fs-3">10+</p>
                <span>Projects Completed</span>
                <p className="mt-3">
                  <a href="/ArniePortFolioResume.docx" className="btn btn-primary" download>
                    Download My Resume
                  </a>
      

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
