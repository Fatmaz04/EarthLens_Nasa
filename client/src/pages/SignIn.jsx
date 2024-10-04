import React, { useEffect, useState } from "react"; // Import useState
import Earth from "../components/Earth";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [isFocused, setIsFocused] = useState(false); // State for input focus
  const [type,setType] = useState("up");
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("name") || localStorage.getItem('email'))
      {
        navigate("/home");
      }
  }, [navigate])

  return (
    <div className="flex flex-col justify-center align-center min-h-screen">
      <div className="flex flex-col justify-center align-center overflow-hidden">
        <Earth
          className={`transition-transform duration-300 ${
            isFocused ? "scale-100 m-2" : "scale-125"
          }`}
        />
      </div>
      <div className="flex flex-col justify-center align-center items-center">
      <div className="grid grid-cols-2">
          <button onClick={()=>setType("up")}
            className={`p-2 ${
              type==='up' ? 'bg-wh text-org' : 'text-wh'
            }`}
            >Sign Up</button>
          <button onClick={()=>setType("in")} className={`p-2 ${
              type==='in' ? 'bg-wh text-org' : 'text-wh'
            }`}>Sign In</button>
        </div>
        {type==="up" && <SignupForm setIsFocused={setIsFocused}/>}
        {type==="in" && <SigninForm setIsFocused={setIsFocused}/>}
        </div>
    </div>
  );
}

export default SignIn;
