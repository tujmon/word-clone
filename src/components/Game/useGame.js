import { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

const answer = sample(WORDS);
export function useGame() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState("input");
  
  const [guess, setGuess] = useState([
    {guess: "", id: Math.random()},
    {guess: "", id: Math.random()},
    {guess: "", id: Math.random()},
    {guess: "", id: Math.random()},
    {guess: "", id: Math.random()},
  ]);
  
  const numOfGuesses = guess.findIndex(function(element) {
    return element.guess === "";
  })
  
  function newGuess(value, index) {
    const nextGuess = [...guess]
    nextGuess[index].guess = value;
    setGuess(nextGuess);
  }

  function handleGuess(event) {
    event.preventDefault();
    if(input.length < 5) {
      alert("palavra tem que ter tamanho igual a 5")
      return;
    }
    let index = guess.findIndex(function(element) {
      return element.guess === "";
    });
    if(index === 4 && input !== answer) setStatus("lose");
    if(input === answer) setStatus("win");
    newGuess(input, index);
    setInput("")
  }
  return [handleGuess, guess, answer, numOfGuesses, input, setInput, status];
}