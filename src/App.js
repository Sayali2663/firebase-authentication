import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { app } from "./FirebaseConfig";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";




function App() {
  return (
    <div className="App">
	<BrowserRouter>
	<Routes>
	<Route path="/" element={ <Home/>} />
	<Route path="/login" element={ <Login/>} />
	<Route path="/Signup" element={ <SignUp/>} />
	<Route path="/about" element={ <About/>} />
	<Route path="*" element={ <Navigate to="/" />} />
	<Route path="/cp" element={ <ChangePassword/>} />
	<Route path="/fp" element={ <ForgotPassword/>} />
	
	</Routes>
	</BrowserRouter>
      
    </div>
  );
}

export default App;
