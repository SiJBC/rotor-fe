import "./App.css"
import Digital from "./components/Digital"
import Analog from "./components/Analog"
import useClock from "./hooks/useClock"

function App() {
  const { hours, minutes, seconds } = useClock()
  return (
    <div className="main">
      <Analog hours={hours} minutes={minutes} seconds={seconds} />
      <Digital hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  )
}

export default App
