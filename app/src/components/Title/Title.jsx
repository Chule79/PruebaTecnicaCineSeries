import './Title.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
const Title = () => {
  return (
    <div className="title">
      <h3>DEMO Streaming</h3>
      <div className='botonesT'>
        <div className='login'>
          <NavLink> Login</NavLink>
        </div>
        <div className="start">
          <NavLink> Start your free trial</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Title;
