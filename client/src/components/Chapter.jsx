import React from "react";
import { useNavigate } from "react-router-dom";

const Chapter = ({ title, image,id }) => {
    const navigate = useNavigate();

  const navChapter = () => {
    if(title.includes("Lock"))
    {
        alert("This Chapter is Locked Gain more Points to Unlock! :D")
    }
    else
    {
        navigate(`/chapter/${id}`);
    }
  }
  return (
    <button onClick={navChapter}>
    <div className="flex flex-col justify-center align-center items-center m-4">
      <h2 className="font-semibold m-2 text-center">Level {id} :{title}</h2>
      <img src={image} alt={title} className="h-[250px] w-[250px] rounded-full"/>
    </div>
    </button>
  );
};

export default Chapter;
