import { useState, useEffect } from 'react'
import './App.css'


const Button = ({ handleClick}) => {
  return(
    <button className="boton-cita-aleatoria"onClick={handleClick}>Proxima anecdota</button>
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



  return (
    <div className='contenedor-principal'>
      {selected}
      <Button handleClick={handleRandomAnecdote} />
    </div>
  )
}

export default App
