import { useState, useEffect } from 'react'
import './App.css'


const Button = ({ handleClick}) => {
  return(
    <button className="boton-cita-aleatoria"onClick={handleClick}>
      Proxima anecdota
    </button>
  )
}

const ButtonVote = ({ handleVote }) => {
  return (
    <button className='boton-votar-cita' onClick={handleVote}>
    Votar
    </button>

  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomAnecdote = () => {
    return anecdotes[Math.floor(Math.random() * anecdotes.length)];
  };
  const [selected, setSelected] = useState(randomAnecdote());
  const handleRandomAnecdote = () => {
    setSelected(randomAnecdote())
  }

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes];
    const selectedIndex= anecdotes.indexOf(selected);
    newVotes[selectedIndex] +=1;
    setVotes(newVotes)
  }

  const maxVotesIndice = votes.indexOf(Math.max(...votes));
  const anecdoteConMasVotos = anecdotes[maxVotesIndice]


  return (
    <div className='contenedor-principal'>
      <h1>Anecdote of the day</h1>
      <div>{selected}</div>
      <p>has {votes[anecdotes.indexOf(selected)]} votes </p>
      <ButtonVote handleVote={handleVote} />
      <Button handleClick={handleRandomAnecdote} />
      <h1>Anecdote with most votes</h1>
      <div>{anecdoteConMasVotos}</div>
      
      
    </div>
  )
}

export default App
