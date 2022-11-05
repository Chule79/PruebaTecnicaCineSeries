import './Popup.css';

import React from 'react';
import Popup from 'reactjs-popup';
export const PopCreate = ({ item }) => {
  const handleOnError = (e) => {
    e.target.src =
      'https://res.cloudinary.com/dryxaftwn/image/upload/v1667649451/xoszkkufit97lysz44iy.jpg';
  };
  return (
    <Popup trigger={<a className="titleButton">{item.title}</a>} modal>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            X
          </button>
          <div className="header"> {item.title} </div>
          <div className="foto">
            <img
              src={item.images['Poster Art'].url}
              alt="No carga la imagen"
              onError={handleOnError}
            />
          </div>
          <div className="descripcion">
            <div className="content">{item.releaseYear}</div>
            <div className="content">{item.description}</div>
          </div>
        </div>
      )}
    </Popup>
  );
};
