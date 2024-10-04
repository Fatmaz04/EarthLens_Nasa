import React from "react";
import Chapter from "../components/Chapter";
import intro from "../Img/change (1).png";
import introLock from "../Img/change (2).png";
import cli from "../Img/cli (1).png";
import cliLock from "../Img/cli (2).png";
import green from "../Img/green h (1).png";
import greenLock from "../Img/green h (2).png";
import human from "../Img/human (2).png";
import humanLock from "../Img/human (1).png";
import sol from "../Img/sol (2).png";
import solLock from "../Img/sol (1).png";
import leader from "../Img/leader.png";
import challenge from "../Img/q.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserRates } from "../utils/APIRoutes";
import { useState, useEffect } from "react";

const Chapters = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: localStorage.getItem('name'),
    points: 0,
    rates: []
  });

  useEffect(() => {
    if (!localStorage.getItem('name') || !localStorage.getItem('email')) {
      navigate("/");
    }
    async function getUserDetails() {
      try {
        const userData = await axios.post(getUserRates, { email: localStorage.getItem('email') });
        setUser({ ...user, points: userData.data.userData.sum, rates: userData.data.userData.rate });
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    }
    getUserDetails();
  }, [navigate]);

  const chapters = [
    {
      title: "Climate Change",
      unlockedImage: intro,
      lockedImage: introLock,
    },
    {
      title: "Greenhouse Gases",
      unlockedImage: cli,
      lockedImage: cliLock,
    },
    {
      title: "Effects of Climate Change",
      unlockedImage: green,
      lockedImage: greenLock,
    },
    {
      title: "Human Impact",
      unlockedImage: human,
      lockedImage: humanLock,
    },
    {
      title: "Solutions",
      unlockedImage: sol,
      lockedImage: solLock,
    },
  ];

  const navLeaderboard = () => {
    navigate("/leaderboard");
  };
  
  const navChallenge = () => {
    navigate("/challenge");
  };
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-wh p-4">
      <div className="font-bold bg-mint p-3 rounded-xl m-2 text-dark">
        Name: {user.name} | Points: {user.points}
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {chapters.map((chapter, index) =>
          user.points >= index * 100 || index === 0 ? (
            <Chapter
              title={chapter.title}
              image={chapter.unlockedImage}
              key={index}
              id={index + 1}
            />
          ) : (
            <Chapter
              title={`${chapter.title} Locked`}
              image={chapter.lockedImage}
              key={index}
              id={index + 1}
            />
          )
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button title="Leaderboard" className="bg-wh p-3 rounded-full m-4 flex justify-center items-center" onClick={navLeaderboard}>
          <img src={leader} alt="" className="rounded-full w-20 h-20" />
        </button>
        <button title="Challenge" className="bg-wh p-3 rounded-full m-4 flex justify-center items-center" onClick={navChallenge}>
          <img src={challenge} alt="" className="rounded-full w-20 h-20" />
        </button>
      </div>
    </div>
  );
};

export default Chapters;
