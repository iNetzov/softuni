import { useState } from 'react'
import './App.css'
import Input from './componets/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Use Effect hook </h1>
     <Input/>
    </>
  )
}

export default App
