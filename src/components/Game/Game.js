import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GameOverBanner from "../GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Create a state hook for the Game Status. Possible statuses are 'running', 'won', and 'lost', with the default status being 'running'.
  const [gameStatus, setGameStatus] = React.useState("running");
  // Create a state hook to store the current guess.
  const [guesses, setGuesses] = React.useState([]);

  // Add handleSubmit function to handle the form submission.
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    // Check if the guess is correct.
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    }
    // Check if the guess is incorrect.
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      {gameStatus} {/* Temporarily logging the game status. */}
      <GuessResults guesses={guesses} answer={answer} />{" "}
      {/* GuessResults is rendered here, so we need to pass the guesses state to it. */}
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus !== "running" && <GameOverBanner gameStatus={gameStatus} />}
    </>
  );
}

export default Game;
