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
import MBTITest from "./page/MBTITest/MBTITest"
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectCareer from './page/SelectCareer/SelectCareer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/mbti-test' element={<MBTITest />}></Route>
        <Route path='/select-career' element={<SelectCareer />}></Route>
        <Route path='/career-detail' element={<Job />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
