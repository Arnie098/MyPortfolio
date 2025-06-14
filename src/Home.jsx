import React, { useEffect, useState } from "react";
import './Home.css';
import myImage from './assets/profile.png';

<img src={myImage} alt="Photo" />


const TypingHighlight = () => {
  const texts = ["Arnie Que", " A Software Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const nextChar = isDeleting
        ? currentText.slice(0, charIndex - 1)
        : currentText.slice(0, charIndex + 1);

      setDisplayedText(nextChar);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && nextChar === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && nextChar === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="highlight">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

const Home = () => {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold text-info">
              Hi, I'm <TypingHighlight />
            </h1>
            <p className="lead mt-3 text-white">
             I'm a software developer with experience in building responsive websites and cross-platform apps using React, React Native, and .NET. I enjoy working with modern tools like FastAPI, Docker, and cloud platforms like Azure and Google Cloud to create clean, scalable, and efficient solutions.
            </p>

            <a href="#projects" className="btn btn-lg mt-4 custom-btn">
              View My Projects
            </a>

       
            
          </div>

          <div className="col-md-6 col-12 image-container">
            <img src={myImage} 
            className="img-fluid profile-image"
            alt="Arnie Que" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
