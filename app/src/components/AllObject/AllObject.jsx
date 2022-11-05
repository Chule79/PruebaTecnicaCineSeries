import './Object.css';

import React from 'react';

import { PopCreate } from '../Popup/Popup';

export const AllObject = ({ object }) => {
  const handleOnError = (e) => {
    e.target.src =
      'https://res.cloudinary.com/dryxaftwn/image/upload/v1667649451/xoszkkufit97lysz44iy.jpg';
  };

  return (
    <div className="AllObject">
      <div className="all">
        {object.length ? (
          object.map((objectCollect) => (
            <>
              <figure key={objectCollect.title} className="carta">
                <img
                  src={objectCollect.images['Poster Art'].url}
                  alt="No carga la imagen"
                  onError={handleOnError}
                />
                <PopCreate item={objectCollect} />
              </figure>
            </>
          ))
        ) : (
          <p>No existen lo busca 😢</p>
        )}
      </div>
    </div>
  );
};
