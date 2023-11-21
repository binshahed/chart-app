/* eslint-disable react/prop-types */
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can add your authentication logic here.
    // For simplicity, I'll just check if both fields are filled.
    if (username && password) {
      onLogin();
    } else {
      alert("Please enter username and password.");
    }
  };

  return (
    <div className="login-page">
      <h2 className="text-center">Login</h2>
      <div >
        <label htmlFor="title" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {/* <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div> */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
