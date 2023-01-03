import './App.css';
import { useState, useEffect } from 'react';
// import Brendan from './components/Brendan';
// import Erin from './components/Erin';

function App() {

  const [brendanCount, setBrendanCount] = useState(0)
  const [brendanAdd, setBrendanAdd] = useState('')
  const [brendanTotal, setBrendanTotal] = useState(0)

  const [erinCount, setErinCount] = useState(0)
  const [erinAdd, setErinAdd] = useState('')
  const [erinTotal, setErinTotal] = useState(0)



  const brendanCalculator = () => {
    const addNumber = parseInt(brendanAdd)
    const countNumber = parseInt(brendanCount)

    const newCount = addNumber + countNumber
    setBrendanTotal(newCount)
    setBrendanAdd('')
    setBrendanCount(newCount)
    console.log(newCount)
  }
  const erinCalculator = () => {
    const addNumber = parseInt(erinAdd)
    const countNumber = parseInt(erinCount)

    const newCount = addNumber + countNumber
    setErinTotal(newCount)
    setErinAdd('')
    setErinCount(newCount)
    console.log(newCount)
  }

  const clearScores = () => {
    setBrendanTotal(0)
    setErinTotal(0)
  }

  return (
    <div className="App">
      <h1>Rummy Counter</h1>
      <div className='name-container'>
        <h2>Brendan</h2>
        <h2>Erin</h2>
      </div>
      <div className='count-container'>
        <div className='count-number'>{brendanTotal}</div>
        <div className='count-number'>{erinTotal}</div>
      </div>
      <div className='counter-container'>
        <div>
            <h1>Brendan Counter</h1>
              <input 
                type="tel" 
                value={brendanAdd}
                onChange={(e) => setBrendanAdd(e.target.value)}
              />
              <button onClick={brendanCalculator}>Submit</button>
        </div>
        <div>
            <h1>Erin Counter</h1>
              <input 
                type="tel" 
                value={erinAdd}
                onChange={(e) => setErinAdd(e.target.value)}
              />
              <button onClick={erinCalculator}>Submit</button>
        </div>
      </div>
      <footer>
        <button onClick={clearScores}>Clear Scores</button>
      </footer>
    </div>
  );
}

export default App;
