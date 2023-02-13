
export default function Form({handleGuess, numOfGuesses, input, setInput, status, answer}) {
  return (<form
    className="guess-input-wrapper"
    onSubmit={handleGuess}
  >
    <label htmlFor="guess-input">Enter guess:</label>
    {
      status === "win" && 
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
    }
    {
      status === "lose" && 
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    }
    {
      status === "input" && 
      <input id="guess-input"
        type="text"
        value={input}
        maxLength={5}
        minLength={5}
        onChange={(event) => setInput(event.target.value.toUpperCase())} />
    }
  </form>)
}