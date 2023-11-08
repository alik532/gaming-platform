import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import Feed from './pages/Feed'
import { auth } from './firebase/firebase'
import { useAppDispatch } from './store/store'
import { fetchCurrentUser } from './helpers/thunks' 
import GamePage from './pages/GamePage'

function App() {

  const dispatch = useAppDispatch()
  auth.onAuthStateChanged(() => dispatch(fetchCurrentUser()))

  return (
      <div className='App'>
        <Routes>
          <Route path='/game/:id' element={<GamePage />}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/signin' element={<Auth path='/signin'/>}/>
          <Route path='/register' element={<Auth path='/register'/>}/>
          <Route path='/feed' element={ <Feed/> }/>
        </Routes>
      </div>
  )
}

export default App
