import './Pelis.css';

import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getObjects } from '../../Apis/api';
import { AllObject } from '../../components/AllObject/AllObject';
const Pelis = () => {
  const [pelisCollage, setPelisCollage] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getObjects('movie');
      setPelisCollage(data);
    })();
  }, []);

  return (
    <>
      <div className="volver">
        <Link state={'Titles'} to="/">
          ⬅ Volver
        </Link>
      </div>
      <div className="seriesEscreen">
        <AllObject object={pelisCollage} />
      </div>
    </>
  );
};

export default Pelis;
