import { useState } from 'react'



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const total = bad + good + neutral;


const All = ({good, neutral, bad}) => {
  return (
  <li>
    all: {good + bad + neutral}
  </li>
  )
}
const Positive = ({total, good}) => {
  const percentage = good * 100 / total
   
   
  return (
  <li>
    poitive: {isNaN(percentage) ? 0 : percentage}%
  </li>
  )
}

const Average = ({good, neutral, bad}) => {
  const total = good + neutral + bad; 
  if (total === 0) {
    return <li>average: 0</li>
  }
  const average = (good - bad / total) / total;
  return(
    <li>
      average: {average.toFixed(2)}
    </li>
  )
}

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => {setNeutral(neutral +1)}}>neutral</button>
        <button onClick={() =>{setBad(bad+1)}}>bad</button>


        <h1>statistics</h1>
        <ul>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <All good={good} neutral={neutral} bad={bad} />
          <Average good={good} neutral={neutral} bad={bad} />
          <Positive total={total} good={good}/>
          
        </ul>
        


        
      </div>
    </>
  )
}

export default App
