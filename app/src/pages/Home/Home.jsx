import React from 'react';

import Footer from '../../components/Footer/Footer';
import NavPrincipal from '../../components/Navs/Navs';
import Pagina from '../../components/Pagina/Pagina';
import Title from '../../components/Title/Title';

const Home = () => {
  return (
    <div className="home">
      <Title />
      <Pagina />
      <NavPrincipal />
      <Footer />
    </div>
  );
};

export default Home;
