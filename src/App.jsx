import './App.css'
import Statistics from './Statistics'
import data from '../data.json'
function App() {
  

  return (
    <>
      
    <Statistics title="Upload stats" stats={data} />
    </>
  )
}

export default App
