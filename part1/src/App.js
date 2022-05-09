
// 1.11 //

// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const StatisticLine = ({ type, value }) => (
//   <tr>
//     <td>{type}</td>
//     <td>{value}</td>
//   </tr>
// )


// const Statistics = ({ good, bad, neutral }) => {
//   if (good === 0 && bad === 0 && neutral === 0) return <div><p>no feedback gibbon</p> </div>
//   return (
//     <div>
//       <h1>stats</h1>
//       <table>
//         <tbody>
//           <StatisticLine type="good" value={good} />
//           <StatisticLine type="neutral" value={neutral} />
//           <StatisticLine type="bad" value={bad} />
//           <StatisticLine type="all" value={good + bad + neutral} />
//           <StatisticLine type="average" value={(good + (bad * -1)) / (good + bad + neutral)} />
//           <StatisticLine type="positive" value={(good / (good + bad + neutral) * 100) + "%"}/>
//         </tbody>
//       </table>
//     </div>
//   )
// }


// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>gib feedback</h1>
//       <Button handleClick={() => setGood(good + 1)} text="good" />
//       <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button handleClick={() => setBad(bad + 1)} text="bad" />
//       <Statistics good={good} bad={bad} neutral={neutral} />
//     </div>
//   )
// }

// export default App



import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  const [idx, setNum] = useState(Math.floor(Math.random() * anecdotes.length))

  const vote = idx => {
    console.log(anecdotes.length)
    const copy = [...points]
    copy[idx] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>anecdote of the day</h1>
      {anecdotes[idx]} <br></br> 
      has {points[idx]} votes <br></br>
      <button onClick={() => setNum(Math.floor(Math.random() * anecdotes.length))}> next anecdote </button>
      <button onClick={() => vote(idx)}> vote </button>

      <h1>anecdote with most votes</h1>
      {anecdotes[points.indexOf(Math.max(...points))]}


    </div>
  )
}

export default App





