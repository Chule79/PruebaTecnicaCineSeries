import './Series.css';

import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import { getObjects } from '../../Apis/api';
import { AllObject } from '../../components/AllObject/AllObject';
const Series = () => {
  const [seriesCollect, setSeriesCollect] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getObjects('series');
      setSeriesCollect(data);
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
        <>
          <AllObject object={seriesCollect} />
        </>
      </div>
    </>
  );
};

export default Series;
