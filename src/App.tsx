import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Feed from './pages/Feed'

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signin' element={<Auth path='/signin'/>}/>
          <Route path='/register' element={<Auth path='/register'/>}/>
          <Route path='/feed' element={ <Feed/> }/>
        </Routes>
      </div>
    </Provider>
  )
}

export default App
