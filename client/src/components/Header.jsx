import React, { useState, useEffect } from "react";
import SignOut from "./SignOut.jsx";
import { useNavigate } from "react-router-dom";
import logo from "../Img/logo.png";

function Header() {
  const navigate = useNavigate();
  const [type, setType] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true); // To track initial render

  // Check localStorage for the last visited page on initial render
  useEffect(() => {
    if (isInitialRender) {
      const storedPage = localStorage.getItem("lastPage");
      if (storedPage && storedPage !== type) {
        setType(storedPage);
        navigate(`/${storedPage}`);
      }
      setIsInitialRender(false); // Mark initial render as complete
    }
  }, [navigate, type, isInitialRender]);

  // Save the current page to localStorage whenever type changes
  useEffect(() => {
    if (!isInitialRender) {
      localStorage.setItem("lastPage", type);
    }
  }, [type, isInitialRender]);

  return (
    <header className="bg-light p-4 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Logo */}
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            navigate("/home");
            setType("home");
          }}
        >
          <img src={logo} className="h-20 cursor-pointer" alt="logo" />
          <h2 className="font-bold text-4xl text-logo my-4">EarthLens</h2>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            className="text-dark focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex lg:items-center lg:ml-[220px] lg:space-x-6 flex-col lg:flex-row absolute lg:static bg-light w-full lg:w-auto z-10 lg:bg-transparent`}
        >
          {[{ title: "Home", route: "/home", type: "home" },
            { title: "Chapters", route: "/chapters", type: "chapters" },
            { title: "Dashboards", route: "/dashboards", type: "dashboards" },
            { title: "Analysis", route: "/analysis", type: "analysis" },
            { title: "Game", route: "/game", type: "game" }
          ].map(({ title, route, type: navType }) => (
            <button
              key={navType}
              title={`Navigate to ${title}`}
              className={`px-5 py-2 font-semibold text-dark rounded-lg transition-all ${
                type === navType ? "bg-[#8fbb46] text-white" : "hover:bg-gray-200 hover:text-black"
              }`}
              onClick={() => {
                navigate(route);
                setType(navType);
                setIsMenuOpen(false); // Close the mobile menu after navigation
              }}
            >
              {title}
            </button>
          ))}
        </nav>

        {/* SignOut Button */}
        <div className="flex justify-end lg:ml-auto mt-4 lg:mt-0">
          <SignOut />
        </div>
      </div>
    </header>
  );
}

export default Header;
