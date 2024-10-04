import React from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove specified items from localStorage
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('challenegeDate');
    localStorage.removeItem("lastPage");

    // Navigate to the home page
    navigate("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-gray-200 text-dark m-2 p-2 px-4 rounded-lg hover:bg-gr hover:text-wh"
    >
      Sign Out
    </button>
  );
}

export default SignOut;
