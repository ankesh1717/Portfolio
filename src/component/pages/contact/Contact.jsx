import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-5">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <form className="mx-auto" style={{ maxWidth: '500px' }}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact
