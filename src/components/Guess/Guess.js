import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers"; // Josh provided this function in the game-helpers.js file to help us out.

function Guess({ value, answer }) { // Added new prop "answer"
  // We'll use the checkGuess function to determine if the guess is correct.
  const result = checkGuess(value, answer);

  console.log({ value, answer, result }); // Log the value, answer, and result to the console so we can see what's happening.

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
