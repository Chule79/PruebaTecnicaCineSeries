import './Series.css';

import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import { getObjects } from '../../Apis/api';
import { AllObject } from '../../components/AllObject/AllObject';
const Series = () => {
  const [seriesCollect, setSeriesCollect] = useState([]);
  const [año, setAño] = useState('2010');
  const [cantidad, setCantidad] = useState('20');
  useEffect(() => {
    (async () => {
      const data = await getObjects('series', año, cantidad);
      setSeriesCollect(data);
    })();
  }, [año, cantidad]);

  return (
    <>
      <div className="volver">
        <Link state={'Titles'} to="/">
          ⬅ Volver
        </Link>
        <div className="filtrar">
          <label htmlFor="año" className="año">
            Desde el Año:
          </label>
          <select
            name="type"
            id="type"
            className="filtrar"
            onChange={(ev) => setAño(ev.target.value)}
          >
            <option value="2010" selected>
              2010
            </option>
            <option value="2000">2000</option>
            <option value="1995">1995</option>
            <option value="1950">1950</option>
          </select>
        </div>

        <div className="filtrar">
          <label htmlFor="cantidad" className="cantidad">
            Cantidad:
          </label>
          <select
            name="cantidad"
            id="cantidad"
            className="cantidad"
            onChange={(ev) => setCantidad(ev.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20" selected>
              20
            </option>
            <option value="100">All</option>
          </select>
        </div>
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
