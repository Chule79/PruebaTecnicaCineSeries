import './Pagina.css';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Pagina = () => {
  const [pag, setPag] = useState('Titles');
  const location = useLocation();
  useEffect(() => {
    setPag(location.state);
  }, [location])
  
  return (
    <div className="Pagina">
      <h3>Popular {pag}</h3>
    </div>
  );
};

export default Pagina;
