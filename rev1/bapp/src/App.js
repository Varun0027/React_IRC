import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/LS/header';
import Log from './components/LS/ls';
import Home from './components/Home';
import SignUp from './components/LS/Sign';



function App() {
  return (
      <div>
    <Router>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/login" element={<Log/>} />
          <Route path="/sign" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        
        
        </Routes>
    </Router>
      </div>
  );
}

export default App;
