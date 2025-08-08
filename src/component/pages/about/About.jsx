import React from 'react';
import './About.css';

const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto">
            <div
              className="p-5 shadow-lg rounded-4 border border-light"
              style={{ backgroundColor: 'white' }}
            >
              <h2
                className="fw-bold text-uppercase text-primary mb-3"
                style={{ letterSpacing: '1px' }}
              >
                About Me
              </h2>
              <hr
                className="mb-4"
                style={{
                  width: '60px',
                  border: '2px solid #0d6efd',
                }}
              />

              <p
                className="lead mb-4 text-muted"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                }}
              >
                I’m{' '}
                <span className="fw-semibold text-dark">
                  Ankesh Kumar Pandey
                </span>
                , a final-year{' '}
                <span className="text-primary fw-semibold">
                  B.Tech (CSE)
                </span>{' '}
                student passionate about creating impactful and scalable
                web applications. I specialize in{' '}
                <strong>Java Full Stack Development</strong> using{' '}
                <strong>Spring Boot</strong>, <strong>React</strong>,{' '}
                <strong>Bootstrap</strong>, and modern cloud
                integrations.
              </p>

              <div className="bg-light p-4 rounded-3 mb-4">
                <h5 className="fw-bold text-dark mb-3">
                  What Sets Me Apart?
                </h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    ✅ Strong problem-solving mindset with a knack for clean code.
                  </li>
                  <li className="mb-2">
                    ✅ Real-world project experience with cloud & payment gateway
                    integration.
                  </li>
                  <li className="mb-2">
                    ✅ Ability to balance aesthetics with performance in web design.
                  </li>
                </ul>
              </div>

              <blockquote className="blockquote text-secondary fst-italic mb-4">
                "Crafted to impress, coded to serve — delivering digital experiences
                that last."
              </blockquote>

              <a
                href="#projects"
                className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
