import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [brendanCount, setBrendanCount] = useState(0)
  const [brendanAdd, setBrendanAdd] = useState('')
  const [brendanTotal, setBrendanTotal] = useState(0)

  const [erinCount, setErinCount] = useState(0)
  const [erinAdd, setErinAdd] = useState('')
  const [erinTotal, setErinTotal] = useState(0)

  const [brendanBackground, setBrendanBackground] = useState('rgba(255,0,0,1)')
  const [erinBackground, setErinBackground] = useState('rgba(255,0,0,1)')

 
  
  useEffect(() => {
    if (brendanTotal > erinTotal) {
      setBrendanBackground("rgba(0,255,63,1)")
      setErinBackground("rgba(255,0,0,1)")
    } else if (erinTotal > brendanTotal) {
      setErinBackground("rgba(0,255,63,1)")
      setBrendanBackground("rgba(255,0,0,1)")
    } else  {
      setErinBackground("rgba(255,0,0,1)")
      setBrendanBackground("rgba(255,0,0,1)")
    }
    
  })

 

  const brendanCalculator = () => {
    const addNumber = parseInt(brendanAdd)
    const countNumber = parseInt(brendanCount)
    console.log(addNumber)

    if (isNaN(addNumber)) {
      return
    } else  {
      const newCount = addNumber + countNumber
      setBrendanTotal(newCount)
      setBrendanAdd('')
      setBrendanCount(newCount)
      console.log(newCount)
    }

    
  }
  const erinCalculator = () => {
    const addNumber = parseInt(erinAdd)
    const countNumber = parseInt(erinCount)

    if (isNaN(addNumber)) {
      return 
    } else {
      const newCount = addNumber + countNumber
      setErinTotal(newCount)
      setErinAdd('')
      setErinCount(newCount)
      console.log(newCount)
    }

  }

  const clearScores = () => {
    setBrendanTotal(0)
    setErinTotal(0)
    setBrendanCount(0)
    setErinCount(0)
    setBrendanAdd('')
    setErinAdd('')
  }

  const calculate = () => {
    brendanCalculator()
    erinCalculator()

  }

  return (
    <div className="App" style={{background: `linear-gradient(90deg, ${brendanBackground} 0%, ${erinBackground} 100%)` }}>
      <div className='title'>Rummy Counter</div>
      <div className='info-container'>
        <div className='brendan-container'>
          <div className='name'>Brendan</div>
          <div className='count-number'>{brendanTotal}</div>
          <div>
                <input 
                  type="tel" 
                  value={brendanAdd}
                  onChange={(e) => setBrendanAdd(e.target.value)}
                />
          </div>
        </div>
        <div className='erin-container'>
          <div className='name'>Erin</div>
          <div className='count-number'>{erinTotal}</div>
          <div>
                <input 
                  type="tel" 
                  value={erinAdd}
                  onChange={(e) => setErinAdd(e.target.value)}
                />
          </div>
        </div>
      </div>
      <button onClick={calculate} >Submit</button>
      <footer>
        <button  onClick={clearScores}>Clear Scores</button>
      </footer>
    </div>
  );
}

export default App;
