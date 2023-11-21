import { useEffect, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a token is present in local storage
    const token = localStorage.getItem("token");
    if (token) {
      // If a token is present, consider the user as logged in
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Set the isLoggedIn state to false
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        {isLoggedIn && <NavBar handleLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
