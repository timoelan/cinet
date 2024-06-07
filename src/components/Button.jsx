// Button.js
import React from 'react';

function Button({ children, className, onClick }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
