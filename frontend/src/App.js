import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [showStrength, setShowStrength] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    setPassword(e.target.value);
    setShowStrength(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.trim()) return;
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:32000';

fetch(`${apiUrl}/check-strength`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ password }),
})


      .then((res) => res.json())
      .then((data) => {
        setStrength(data.strength);
        setShowStrength(true);
      })
      .catch(() => {
        setStrength('');
        setShowStrength(false);
      });
  };

  const getStrengthClass = () => {
    switch (strength) {
      case 'Weak': return 'text-weak';
      case 'Moderate': return 'text-moderate';
      case 'Strong':
      case 'Very Strong': return 'text-strong';
      default: return '';
    }
  };

  return (
    <div className="full-screen-wrapper d-flex justify-content-center align-items-center">
  <div className="stars"></div>
  <div className="password-box">
    <h3 className="mb-4 text-center">Password Strength Checker</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-3" style={{ maxWidth: '400px' }}>
        <div className="position-relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control pe-5"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            style={{ borderRadius: '8px' }}
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '👁️' : '🙈'}
          </span>
        </div>


        <button
          className="btn btn-primary mt-2 w-100"
          type="submit"
          disabled={!password.trim()}
        >
          Submit
        </button>
      </div>
    </form>

    {showStrength && (
      <p className={`strength-text text-center ${getStrengthClass()}`}>
        Password strength: <strong>{strength}</strong>
      </p>
    )}
  </div>
</div>

  );
}

export default App;
