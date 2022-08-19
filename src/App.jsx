
import { Routes,  Route} from 'react-router-dom'
import { GlobalStyle } from './App.style'

import Home from './pages/Home'
import Login from './pages/Login'
import List from './pages/List'
import About from './pages/About'

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App
