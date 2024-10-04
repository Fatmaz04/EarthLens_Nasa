import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component to manage authentication
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Manage user state
  const navigate = useNavigate();

  // Check localStorage for user info on mount
  useEffect(() => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    
    if (name && email) {
      setUser({ name, email });
    } else {
      navigate("/"); // Redirect to home page if not authenticated
    }
  }, [navigate]);

  // Function to log in user
  const login = (name, email) => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    setUser({ name, email });
  };

  // Function to log out user
  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setUser(null);
    navigate("/"); // Redirect to home page on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
