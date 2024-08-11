import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import Keyboard from "../Keyboard";


function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS)); // Replaces above variable declaration to use React.useState() hook.
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

  // Adding a function to handle restarting the game.
  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />

      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

//   return (
//     <>
//       {gameStatus} {/* Temporarily logging the game status. */}
//       <GuessResults guesses={guesses} answer={answer} />{" "}
//       {/* GuessResults is rendered here, so we need to pass the guesses state to it. */}
//       <GuessInput
//         gameStatus={gameStatus}
//         handleSubmitGuess={handleSubmitGuess}
//       />
//       {gameStatus === "won" && (
//         <WonBanner
//           numOfGuesses={guesses.length}
//         />
//       )}
//       {gameStatus === "lost" && (
//         <LostBanner
//           answer={answer}
//         />
//       )}
//     </>
//   );
// }

export default Game;
