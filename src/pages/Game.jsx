import React from 'react';
import Card from '../components/Card';

function Game() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            src="src\assets\icons\tempelrun.webp"
          />
        </div>
        <div className="col-md-4">
          <Card
            src="https://via.placeholder.com/150/0000FF/808080"
            alt="Second Card Image"
            text="Another quick example text for the second card."
          />
        </div>
        <div className="col-md-4">
          <Card
            src="https://via.placeholder.com/150/FF0000/FFFFFF"
            alt="Third Card Image"
            text="Some more example text for the third card."
          />
        </div>
      </div>
    </div>
  );
}

export default Game;