//import logo from './logo.svg';
//import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';

import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      < Nav/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
