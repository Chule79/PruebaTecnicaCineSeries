import './App.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main className='padre'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
