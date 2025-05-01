import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login_component from './components/login'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login_component />
    </>
  )
}

export default App
