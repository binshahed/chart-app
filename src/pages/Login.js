/* eslint-disable react/prop-types */
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Check if both username and password are entered
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      setLoading(true);
      // Make a POST request to the login API endpoint
      const response = await fetch(
        "https://bb212102-2fab-4fae-9227-3b2b24cf1275.mock.pstmn.io/auth/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (response.ok) {
        // If the response is successful, trigger the onLogin callback
        setLoading(false);
        console.log(response);
        localStorage.setItem("token", response.url);
        onLogin();
      } else {
        // If the response is not successful, handle the error
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      alert("Login Failed");
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <h2 className="text-center">Login</h2>
      <div>
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
