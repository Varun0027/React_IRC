import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import Adduser from "./Components/Adduser";
import Edituser from "./Components/Edituser";

const App=()=> {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<User />} />
        
        <Route path="/adduser" element={<Adduser/>} />
        <Route path="/edituser" element={<Edituser/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
