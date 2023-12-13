import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Css/ls.css';
import email_icon from '../../Assets/images/email.png';
import user_icon from '../../Assets/images/person.png';
import pass_icon from '../../Assets/images/password.png';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt=" " />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input">
              <img src={email_icon} alt=" " />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={pass_icon} alt=" " />
              <input type="password" placeholder="Password" />
            </div>
            <div className="submit-container">
              <button type="submit" className="submit">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
