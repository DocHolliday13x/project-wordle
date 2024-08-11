import React from 'react';

function Guess({ guess }) {
  return (
    <div className="guess-results">
  <p className="guess">
    <span className="cell">H</span>
    <span className="cell">E</span>
    <span className="cell">L</span>
    <span className="cell">L</span>
    <span className="cell">O</span>
  </p>
  <p className="guess">
    <span className="cell">T</span>
    <span className="cell">H</span>
    <span className="cell">E</span>
    <span className="cell">R</span>
    <span className="cell">E</span>
  </p>
  <p className="guess">
    <span className="cell">W</span>
    <span className="cell">O</span>
    <span className="cell">R</span>
    <span className="cell">L</span>
    <span className="cell">D</span>
  </p>
  <p className="guess">
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
  </p>
  <p className="guess">
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
  </p>
</div>
  )
}

export default Guess;
