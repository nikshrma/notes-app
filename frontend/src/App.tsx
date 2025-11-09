import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { OpenNote } from './pages/OpenNote'
function App() {


  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path='/view' element={<OpenNote/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
