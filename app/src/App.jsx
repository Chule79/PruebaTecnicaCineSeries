import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Pagina from './components/Pagina/Pagina';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <main className="padre">
        <Title />
        <Pagina />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
