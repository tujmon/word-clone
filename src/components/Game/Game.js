import React from 'react';
import Form from './Form'
import Results from './Results';
import { useGame } from './useGame';

function Game() {
  
  const [handleGuess, guess, answer, numOfGuesses, input, setInput, status]= useGame();
  return (
    <>
      <Results 
        guess={guess} 
        answer={answer}/>
      <Form 
        handleGuess={handleGuess} 
        numOfGuesses={numOfGuesses} 
        input={input} 
        setInput={setInput} 
        status={status} 
        answer={answer}/>
    </>)
}

export default Game;
