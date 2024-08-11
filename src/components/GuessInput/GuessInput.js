import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  // Create a state hook to store the current guess.
  // The initial value of the guess is an empty string.
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    // Prevent the form from refreshing the page.
    event.preventDefault();
    // Adding some validation for the guess.
    if (!tentativeGuess) {
      // If the guess is empty, return early and do nothing.
      return;
    }

    if (tentativeGuess.length !== 5) {
      window.alert("Guess must be 5 characters long.");
      return;
    }

    // Instead of logging the guess value before deletion, pass the current guess value up to the handleSubmitGuess function.
    handleSubmitGuess(tentativeGuess);

    // Clear the input after submitting the form.
    setTentativeGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"} // Disable the input if the game status is NOT running.
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}" // Adding this validation corrects the failure caused by .toUpperCase() in the onChange event listener.
        title="5 Letter Word"
        // The value of the input is the current guess.
        value={tentativeGuess}
        // Add onChange event listener to update the guess.
        onChange={(event) => {
          // Update the guess with the value of the input.
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
