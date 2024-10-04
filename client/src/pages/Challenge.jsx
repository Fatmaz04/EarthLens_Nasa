import React, { useState, useEffect } from "react";
import correctSound from "../sounds/correct.mp3";
import wrongSound from "../sounds/wrong.mp3";
import bg from "../Img/bg3.png";
import axios from "axios";
import { addBouns } from "../utils/APIRoutes";
// List of questions
const questions = [
  {
    statement: "Human activities like burning fossil fuels and deforestation are the primary cause of current climate change.",
    state: "fact",
    explain:
      "Fact! Human activities are the leading cause of modern climate change. Burning fossil fuels (like coal, oil, and natural gas) releases large amounts of carbon dioxide (CO₂) into the atmosphere, trapping heat and causing the Earth’s temperature to rise.",
  },
  {
    statement: "Climate change is a hoax; the Earth’s climate is not changing.",
    state: "myth",
    explain:
      "Myth! The overwhelming scientific consensus is that climate change is real. There is clear evidence of rising global temperatures, melting ice caps, and increasing extreme weather events, all largely due to human actions.",
  },
  {
    statement: "Methane (CH₄) is a more powerful greenhouse gas than carbon dioxide (CO₂), though it exists in smaller quantities.",
    state: "fact",
    explain:
      "Fact! Methane is over 25 times more effective than CO₂ at trapping heat in the atmosphere. While CO₂ is more abundant, reducing methane emissions is also crucial in the fight against climate change.",
  },
  {
    statement: "It’s too late to take action against climate change; nothing can be done now to stop it.",
    state: "myth",
    explain:
      "Myth! It’s not too late to act. By reducing greenhouse gas emissions, transitioning to renewable energy, and adopting sustainable practices, we can slow the progression of climate change and reduce its impacts on the planet.",
  },
  {
    statement: "Most climate scientists are unsure whether human activity is causing climate change.",
    state: "myth",
    explain:
      "Myth! Around 97% of climate scientists agree that human activities are driving the current changes in the Earth’s climate. This consensus is based on decades of research and data analysis.",
  },
];

function Challenge() {
  const [selectedOption, setSelectedOption] = useState("");
  const [question, setQuestion] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (isAnswered) {
      const sendPoints = async () => {
        try {
          await axios.post(addBouns, { email: localStorage.getItem('email'), points: points });
          const today = new Date().toISOString(); // Store date as ISO string
          localStorage.setItem('challengeDate', today);
        } catch (error) {
          console.log(error);
        }
      };
      sendPoints();
    }
  }, [points, isAnswered]);

  const handleSubmit = () => {
    if (selectedOption) {
      const isCorrect = selectedOption === question.state;
      const audio = new Audio(isCorrect ? correctSound : wrongSound);
      audio.play();
      setPoints(isCorrect ? 50 : 0); // Set points only if correct
      setIsAnswered(true);
      setAnimationClass(isCorrect ? "animate-bounce" : "animate-shake");

      // Reset animation class after a short duration
      setTimeout(() => {
        setAnimationClass("");
      }, 1000);
    }
  };

  const getDailyQuestion = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date as YYYY-MM-DD
    let lastChallenge = "1970-01-01"; // Initialize with a very old date

    const storedDate = localStorage.getItem('challengeDate');

    // Check if 'challengeDate' exists in localStorage and is a valid date
    if (storedDate && !isNaN(new Date(storedDate).getTime())) {
      lastChallenge = new Date(storedDate).toISOString().split("T")[0];
    }

    // Check if 24 hours have passed since the last challenge
    if (lastChallenge < today) {
      console.log(lastChallenge);
      console.log(today);
      const todayDate = new Date().getDay(); // Get day of the week (0-6)
      const randomIndex = todayDate % questions.length; // Use modulus to keep index within bounds
      setQuestion(questions[randomIndex]);
      setMessage("You can only attempt this challenge once every 24 hours.");
    } else {
      setMessage("You can only attempt this challenge once every 24 hours.");
    }
  };

  useEffect(() => {
    getDailyQuestion();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {question && !isAnswered ? (
        <div className="bg-white p-4 m-4 flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-xl font-bold mb-4">{question.statement}</h1>
          <div className="flex gap-4">
            <label
              className={`flex items-center justify-center px-6 py-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedOption === "fact" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="quiz"
                value="fact"
                className="hidden"
                checked={selectedOption === "fact"}
                onChange={handleOptionChange}
                disabled={isAnswered}
              />
              Fact
            </label>

            <label
              className={`flex items-center justify-center px-6 py-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedOption === "myth" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              <input
                type="radio"
                name="quiz"
                value="myth"
                className="hidden"
                checked={selectedOption === "myth"}
                onChange={handleOptionChange}
                disabled={isAnswered}
              />
              Myth
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-dark text-white mt-4 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            disabled={isAnswered}
          >
            Submit Your Answer
          </button>
        </div>
      ) : (
        <p className="mt-5 text-lg text-red-500 bg-white p-4 rounded-md">{message}</p>
      )}

      {isAnswered && (
        <div className="mt-5 bg-white rounded-lg m-10 p-10">
          <p className={`text-lg ${points > 0 ? "text-green-500" : "text-red-500"} ${animationClass}`}>
            {question.explain}
          </p>
        </div>
      )}
    </div>
  );
}

export default Challenge;
