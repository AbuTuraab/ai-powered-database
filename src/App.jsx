import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';



import Chat from "./Components/ChatPage";
import LandingPage from "./Pages/Homepage";
function App() {


  
  return (
  <>
  
    
    
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
       <Route path="/chat" element={<Chat />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App
