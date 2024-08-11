import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';


function GuessResults({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={validatedGuesses[num]} /> // Bring in the new "answer" prop here, then give GuessResults access to it.
      ))}
    </div>
  );
}

export default GuessResults;
