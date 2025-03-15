import './App.css'
import BasicTimer from './components/BasicTimer'
import BasicTimerWithReactHook from './components/BasicTimerWithReactHook'

function App() {
  

  return (
    <>
    <div>
      <h1>This is broken timer</h1>
    <BasicTimer/>
    <h1>This is good timer</h1>
    <BasicTimerWithReactHook/>
    
    </div>
    </>
  )
}

export default App
