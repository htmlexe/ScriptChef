import Reat from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './page/Home/Home';
import SignIn from './page/SignIn/SignIn';
import SignUp from './page/SignUp/SignUp';
import Job from './page/Job/Job';
import { AuthContextProvider } from "./context/authContext";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Job />}> </Route>
        <Route path='/job' element={<Job />}></Route>
        <Route path='/' element={<SignIn />}> </Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/' element={<SignUp />}> </Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
