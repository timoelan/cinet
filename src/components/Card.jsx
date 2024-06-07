import React from 'react';

function Card({ src, alt, text }) {
  return (
    <div className="card" style={{ width: '24rem' }}>
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;