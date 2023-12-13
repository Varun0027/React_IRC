import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Css/ls.css';
import email_icon from '../../Assets/images/email.png';
import pass_icon from '../../Assets/images/password.png';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt=" " />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={pass_icon} alt=" " />
              <input type="password" placeholder="Password" />
            </div>
            <div className="forgot-password">
              Forgot Password? <span>Click Here</span>
            </div>
            <div className="submit-container">
              <button type="submit" className="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
