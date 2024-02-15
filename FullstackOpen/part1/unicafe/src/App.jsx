import { useState } from 'react'


const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const Positive = () => {
    const percentage = Math.round(good * 100 / total);
    return <li>positive: {isNaN(percentage) ? 0 : percentage}%</li>;
  };

  const Average = () => {
    if (total === 0) {
      return <li>average: 0</li>
    }
    const average = (good - bad) / total;
    return <li>average: {average.toFixed(2)}</li>
  };

  if (total === 0) {
    return <p>No feedback given yet</p>;
  }

  return (
    <>
    <h1>statistics</h1>
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>all:{total}</li>
      <Average />
      <Positive />
    </ul>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => {setNeutral(neutral +1)}}>neutral</button>
        <button onClick={() =>{setBad(bad+1)}}>bad</button>       
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
