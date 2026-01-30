import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar/>
    </>
  )
}

export default App
