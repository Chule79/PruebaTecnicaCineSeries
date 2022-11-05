import './Navs.css';

import React from 'react';
import { Link } from 'react-router-dom';

const NavPrincipal = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link state={'Series'} to="series">
            <div className="seriesIcon">
              <h3>SERIES</h3>
            </div>
          </Link>
        </li>
        <li>
          <Link state={'Pelis'} to="pelis">
            <div className="pelisIcon">
              <h3>PELIS</h3>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavPrincipal;
