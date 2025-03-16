import './App.css'
import BasicTimer from './components/BasicTimer'
import BasicTimerWithReactHook from './components/BasicTimerWithReactHook'
import Counter from './components/Counter'

function App() {
  

  return (
    <>
    <div>
      <h1>This is broken timer</h1>
    <BasicTimer/>
    <h1>This is good timer</h1>
    <BasicTimerWithReactHook/>
    <h1>Counter</h1>
    <Counter/>
    
    </div>
    </>
  )
}

export default App
