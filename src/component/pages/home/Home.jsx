import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ProfilePic } from '../../../assets/Img'; // Your existing import
import './Home.css'; // Your existing CSS

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1>
                Hello, I'm <span className="text-primary">Ankesh Kumar Pandey</span>
              </h1>
              <p className="lead mt-3">
                Java Full Stack Developer | Passionate about building modern, responsive web applications.
              </p>
              <div className="mt-4">
                <a
                  href="https://eatx.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark me-2"
                >
                  View My Work
                </a>

                {/* Contact Me button opens modal */}
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setShowModal(true)}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img 
                src={ProfilePic} 
                alt="Profile Photo" 
                className="profile-img shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="modal-header border-0">
                <h5 className="modal-title">Contact Me</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-around fs-2">
                <a
                  href="https://www.linkedin.com/in/ankesh01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/pandey.ankesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/kr_ankesh_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-danger"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/ankesh1717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                  title="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
