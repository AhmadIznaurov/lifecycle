import './App.css';
import { useEffect, useState } from 'react'
import Check from './Check'


function App() {

  const [check, setCheck] = useState(true)

  useEffect(() => {
    console.log('I am app and i mounted')
  }, [check])

  return (
    <div className="App">
      <button onClick={()=> setCheck(!check)}>PUSH ME</button>
      {
        check ? <Check /> : null 
      }
    </div>
  );
}

export default App;
