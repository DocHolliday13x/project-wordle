import React from 'react';

function GuessInput() {
  // Create a state hook to store the current guess.
  // The initial value of the guess is an empty string.
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    // Prevent the form from refreshing the page.
    event.preventDefault();
    // Adding some validation for the guess.
    if (!guess) {
      // If the guess is empty, return early and do nothing.
      return;
    }

    if (guess.length !== 5) {
      window.alert('Guess must be 5 characters long.');
      return;
    }

    // Log the current guess as an object to the console.
    console.log({ guess });
    // Clear the input after submitting the form.
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 Letter Word"
        // The value of the input is the current guess.
        value={guess}
        // Add onChange event listener to update the guess.
        onChange={(event) => {
          // Update the guess with the value of the input.
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input" 
        type="text" 
      />
    </form>
  );
}

export default GuessInput;
