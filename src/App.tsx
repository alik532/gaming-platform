import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  axios.get("https://api.rawg.io/api/developers?key=7fc5502620c64a2da2116a770ca355ea",).then(response => console.log(response))

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
