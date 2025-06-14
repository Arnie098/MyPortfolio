import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_df14r1u',
      'template_4sbny8d',
      form.current,
      'Uk4XfVjYe4mf6P1jK'
    )
    .then((result) => {
      console.log(result.text);
      setSent(true);
      form.current.reset();
    }, (error) => {
      console.error(error.text);
    });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Your email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">Message</label>
                <textarea name="message" className="form-control" id="message" rows="5" placeholder="Your message" required></textarea>
              </div>

              <button type="submit" className="btn btn-info w-100">Send Message</button>
            </form>

            {sent && (
              <div className="alert alert-success mt-3" role="alert">
                Message sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
