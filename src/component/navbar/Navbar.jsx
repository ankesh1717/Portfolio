import React from 'react';
import { Logo } from "../../assets/Img";
import { useNavigate } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate(); // ✅ define the navigate function

  return (
    <nav className="navbar navbar-expand-lg navBar fixed-top">
      <div className="container">
        
          <a
          className="navbar-brand"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <div className='logoImg'><img src={Logo} alt="Logo" className="logo-img" /></div>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <span className="nav-link">Home</span>
            </li>
            <li className="nav-item" onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>
              <span className="nav-link">About</span>
            </li>
            <li className="nav-item" onClick={() => navigate('/skills')} style={{ cursor: 'pointer' }}>
              <span className="nav-link">Skills</span>
            </li>
            <li className="nav-item" onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
              <span className="nav-link">Projects</span>
            </li>
            <li className="nav-item" onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>
              <span className="nav-link">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
