import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  axios.get("https://api.rawg.io/api/games?key=7fc5502620c64a2da2116a770ca355ea",).then(response => console.log(response))

  return (
    <Provider store={store}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signin' element={<Auth path='/signin'/>}/>
          <Route path='/register' element={<Auth path='/register'/>}/>
        </Routes>
      </div>
    </Provider>
  )
}

export default App
