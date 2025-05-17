import { useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovie] =  useState([
{id:1,title:'The matrix'},
{id:2,title:'Man of Steal'},
{id:3,title:'Spider Man'},
{id:4,title:'Lord of the rings'},
  ])
  const removeFirstHandler = () => {
    setMovie(movies.shift()); // DONT DO THIS
    setMovie([...movies])     // Aways use new refferance, becouse it is watching for referance. When workign with objects and reference types.
  }

  return (
    <>
      <h2>Movies List</h2>
      <ul>{movies.map((m) => <li key={m.id}>{m.title}</li>)}</ul>
      <button onClick={removeFirstHandler}>remove first</button>

    </>
  )
}

export default App
