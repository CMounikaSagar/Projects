import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // This state is the "master switch" for the tricky behavior
  const [isInvalidAttempt, setIsInvalidAttempt] = useState(false);
  
  const [buttonStyle, setButtonStyle] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    // Correct details: 'admin' and 'password'
    if (username === 'admin' && password === 'password') {
      alert('Login Successful!');
      setIsInvalidAttempt(false); // Turn off the trick
      setButtonStyle({});       // Reset button position
    } else {
      // Invalid details: Turn on the trick!
      setIsInvalidAttempt(true);
    }
  };

  // This function moves the button when the mouse HOVERS over it
  const moveButton = () => {
    // Only move the button if the trap is set (isInvalidAttempt is true)
    if (isInvalidAttempt) {
      const x = Math.random() * 200 - 100; // Random horizontal move
      const y = Math.random() * 200 - 100; // Random vertical move
      
      setButtonStyle({
        transform: `translate(${x}px, ${y}px)`,
      });
    }
  };

  // This function resets the button when the user tries to correct their mistake
  const handleInputFocus = () => {
    if (isInvalidAttempt) {
      setIsInvalidAttempt(false); // Turn off the trick
      setButtonStyle({});       // Reset button position
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            // Add 'input-error' class if the login attempt was invalid
            className={isInvalidAttempt ? 'input-error' : ''}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Hint: admin"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            // Add 'input-error' class if the login attempt was invalid
            className={isInvalidAttempt ? 'input-error' : ''}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Hint: password"
          />
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="submit-btn"
            style={buttonStyle}
            // The key event that makes the button skip away
            onMouseEnter={moveButton} 
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;