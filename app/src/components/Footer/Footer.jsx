import './Footer.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerEnlaces">
          <div className="footerText">
            <a> Home </a>
          </div>
          <div className="footerText">
            <a>Terms and Conditions</a>
          </div>
          <div className="footerText">
            <a>Privacy Policy</a>
          </div>
          <div className="footerText">
            <a>Collection Statement</a>
          </div>
          <div className="footerText">
            <a>Help</a>
          </div>
          <div>
            <a>Manage Account</a>
          </div>
        </div>
        <div className="copyR">
          <p>Copyright ⓒ 2016 DEMO Streaming. All Rights Reserved.</p>
        </div>
        <div className="iconos">
          <div className="redes">
            <NavLink>
              <img src="https://res.cloudinary.com/dryxaftwn/image/upload/v1667585931/mqepuhvgkfgk00umlqrw.svg" />
            </NavLink>
            <NavLink>
              <img src="https://res.cloudinary.com/dryxaftwn/image/upload/v1667585932/kai1kmazb4khkysftgsr.svg" />
            </NavLink>
            <NavLink>
              <img src="https://res.cloudinary.com/dryxaftwn/image/upload/v1667585931/tvrgwygbvg4pxelgfthn.svg" />
            </NavLink>
          </div>
          <div className="plataformas">
            <NavLink>
              <img src="https://res.cloudinary.com/dryxaftwn/image/upload/v1667586094/jrvthf08intrxzr12lgg.svg" />
            </NavLink>
            <NavLink>
              <img src="https://res.cloudinary.com/dryxaftwn/image/upload/v1667586094/wp54bhknrou5jarfltru.svg" />
            </NavLink>
            <NavLink>
              <img src="https://res.cloudinary.com/dryxaftwn/image/upload/v1667586094/r45g1uvue90ie3mwzmzm.svg" />
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
