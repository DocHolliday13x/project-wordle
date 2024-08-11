import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {value.split("").map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
      {/* <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span> */}
    </p>
  );
}

export default Guess;
