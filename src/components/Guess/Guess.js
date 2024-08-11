import React from "react";
import { range } from "../../utils";
// import { checkGuess } from "../../game-helpers"; // Josh provided this function in the game-helpers.js file to help us out.

// Creating a function for the cells to have a dynamic class name.
function Cell({ letter, status }) {
  // Added the letter and status props so we can use them to determine the class name.
  const className = status ? `cell ${status}` : "cell"; // If there's a status, use it. Otherwise, use "cell".

  return (
    <span className={className}>
      {letter}{" "}
      {/* I'm going to have to change the className from "cell" to something dynamic. Achieved by adding className variable above */}
    </span>
  );
}


function Guess({ value }) {
  // console.log({ value }); // Log the value to the console so we can see what's happening.

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          // letter={result ? result[num].letter : ""} // Pass the letter prop to the Cell component. Adding the check for result to prevent errors.
          // status={result ? result[num].status : ""} // Pass the status prop to the Cell component.
          letter={value ? value[num].letter : ""}
          status={value ? value[num].status : ""}
        /> // Pass the value and num props to the Cell component.
      ))}
    </p>
  );
}

export default Guess;
