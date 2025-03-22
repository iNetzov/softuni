import { useState } from 'react'
import './App.css'
import Input from './componets/Input'
import Timer from './componets/Timer';

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);
  const showButtonHandler = () => {
    setShow(state => !state);
  }
  return (
    <>
      <h1>Use Effect hook </h1>
      <button onClick={showButtonHandler}>{show ? 'Hide' : 'Show'} input</button>
      {show && <Input/>}
      <Timer/>
    </>
  )
}

export default App
