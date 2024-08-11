import React from "react";

function GameOverBanner({ gameStatus}) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>NUM OF GUESSES GOES HERE guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>ANSWER GOES HERE</strong>.</p>
      </div>
    );
  }
}

export default GameOverBanner;
