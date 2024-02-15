import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
      )
}
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;

  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good + 100) /total;

  if (total === 0) {
    return <p>No feedback given yet</p>;
  }

  return (
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={`${positivePercentage.toFixed(2)}%`} />
      </tbody>
    </table>
    
      
    
    </>
  )
}


const Button = ( {label, handleClick}) => {
  return <button onClick={handleClick}>{label}</button>
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good +1);
  const incrementNeutral = () => setNeutral(neutral +1);
  const incrementBad = () => setBad(bad +1);

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button label="good" handleClick={incrementGood} />
        <Button label="neutral" handleClick={incrementNeutral} />
        <Button label="bad" handleClick={incrementBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
