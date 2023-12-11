import Nav from "./components/nav";
import Footer from "./components/footer";
import "./Assets/Css/nav.css";
import Home from "./components/sekiro";
import "./Assets/Css/home.css";
import Img from "./Assets/Images/sekiro.jpg";
import Img2 from "./Assets/Images/sv.mp4";
  function App(){
    return (
      <div>
        <Nav/>
        <Home/>
        <div className="img-in">
        <img src={Img} className="img1"></img>
        </div>
      <div class="vabt">
            <p>GAMOGRAPHY</p>
        </div>
      <div className="sv">
        <video controls autoplay width="1000" height="560">     
          <source src={Img2} type="video/mp4" />
        </video>
      </div>
      
      <div className="spec">
        <p>SPECIFICATIONS</p>
        <h1>
OS:  Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit<br/>
PROCESSOR:  Intel Core i3-2100 | AMD FX-6300<br/>
MEMORY:  4 GB RAM<br/>
GRAPHICS:  NVIDIA GeForce GTX 760 | AMD Radeon HD 7950<br/>
DIRECTX:  Version 11<br/>
NETWORK:  Broadband Internet connection<br/>
STORAGE:  .  25 GB available space<br/>
SOUND CARD: DirectX 11 Compatible</h1>
      </div>
      </div>
  )
}
export default App;
