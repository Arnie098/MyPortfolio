import React from 'react';
import './Services.css'; 
import { FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Build responsive and modern websites using React, HTML, CSS, and JavaScript.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Create mobile-first applications using React Native and Expo.',
  },
  {
    icon: <FaDatabase />,
    title: 'Backend & Database',
    description: 'Develop RESTful APIs with FastAPI or .NET and manage data with SQL Server or SQLite.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">What I Do</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <div className="service-card p-4 h-100 shadow-sm rounded">
                <div className="service-icon fs-1 text-primary mb-3">{service.icon}</div>
                <h5 className="mb-3 text-warning">{service.title}</h5>
                <p className=" text-light ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
