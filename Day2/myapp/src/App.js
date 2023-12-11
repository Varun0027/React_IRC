import './Assets/css/Style.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">REGISTER</a></li>
          </ul>
        </nav>
      </header>
      <h1>LOGIN</h1>
      <form className="container">
        <input type="text" id="uname" placeholder="UserName" className="inp" />
        <input type="password" id="psd" placeholder="Enter Password" className="inp" />
        <input type="submit" value="LOGIN" className="inp-sb" />
      </form>
    </div>
  );
}

export default App;
