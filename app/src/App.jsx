import './App.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import Pagina from './components/Pagina/Pagina';

function App() {
  return (
    <div className="App">
      <main className='padre'>
        <Title />
        <Pagina />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
