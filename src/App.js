import { useState } from "react";
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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
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
