import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Create a state hook to store the current guess.
  const [guesses, setGuesses] = React.useState([]);

  // Add handleSubmit function to handle the form submission.
  function handleSubmitGuess(tentativeGuess) {
    // TODO: Update the array to include the guess in the array
    console.log("Received guess", tentativeGuess);
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
  <>
    <GuessResults guesses={guesses} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} />
  </>
  );
}

export default Game;
