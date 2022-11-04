import './Navs.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavPrincipal = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="series">
            <div className="seriesIcon">
              <h3>SERIES</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="pelis">
            <div className="pelisIcon">
              <h3>PELIS</h3>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavPrincipal;
