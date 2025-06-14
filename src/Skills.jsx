import React from 'react';
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const skills = [
    { name: 'HTML', color: '#e34c26', icon: 'fab fa-html5' },
    { name: 'CSS', color: '#264de4', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', color: '#f0db4f', icon: 'fab fa-js-square' },
    { name: 'React', color: '#61dafb', icon: 'fab fa-react' },
    { name: 'React Native', color: '#00d8ff', icon: 'fab fa-react' },
  
    { name: 'Bootstrap', color: '#7952b3', icon: 'fab fa-bootstrap' },
    { name: '.NET', color: '#512bd4', icon: 'fas fa-code' },
    { name: 'FastAPI', color: '#009688', icon: 'fas fa-bolt' },
    { name: 'Docker', color: '#0db7ed', icon: 'fab fa-docker' },
    { name: 'Azure', color: '#0089d6', icon: 'fas fa-cloud' },
    { name: 'Google Cloud', color: '#ea4335', icon: 'fas fa-cloud' },
  
    { name: 'Git', color: '#f1502f', icon: 'fab fa-git-alt' },
    { name: 'GitHub', color: 'white', icon: 'fab fa-github' },
  
    { name: 'SQLite', color: '#003b57', icon: 'fas fa-database' },
    { name: 'MySQL', color: '#00758f', icon: 'fas fa-database' },
    { name: 'SSMS', color: '#ff6c00', icon: 'fas fa-server' },
  ];
  

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-white">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card text-center h-100 skill-card">
              <div className="card-body">
                <i className={`${skill.icon} fa-3x mb-3`} style={{ color: skill.color }}></i>
                 <h5 className="card-title">{skill.name}</h5>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
