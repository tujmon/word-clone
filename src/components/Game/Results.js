import { checkGuess } from '../../game-helpers';
export default function Results({guess, answer}) {
  return(  <div className="guess-results">
  {guess.map((({guess, id}) => {
    if (guess === "") {
      return (
        <p key={id} className="guess">
        <span className={"cell"}></span>
        <span className={"cell"}></span>
        <span className={"cell"}></span>
        <span className={"cell"}></span>
        <span className={"cell"}></span>
      </p>
      )
    }
    const checkedWord = checkGuess(guess, answer);
  return(
  <p key={id} className="guess">
    <span className={`cell ${checkedWord[0].status}`}>{checkedWord[0].letter}</span>
    <span className={`cell ${checkedWord[1].status}`}>{checkedWord[1].letter}</span>
    <span className={`cell ${checkedWord[2].status}`}>{checkedWord[2].letter}</span>
    <span className={`cell ${checkedWord[3].status}`}>{checkedWord[3].letter}</span>
    <span className={`cell ${checkedWord[4].status}`}>{checkedWord[4].letter}</span>
  </p>)
}))}

</div>)
}