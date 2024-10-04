import React, { useState } from "react";
import { useParams } from "react-router-dom";
import chaptersData from "../data/chaptersData";
import { addRate } from "../utils/APIRoutes"; // Adjust the path to your data file
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the chapter ID from the URL
  const chapter = chaptersData.find((chap) => chap.id === parseInt(id));

  // State to track selected options for each question
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(chapter?.quiz.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false); // Track if the quiz has been submitted

  if (!chapter) {
    return <div>Quiz not found</div>;
  }

  // Handle selecting an answer
  const handleAnswerChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  // Handle quiz submission
  const handleSubmit = async () => {
    setSubmitted(true);

    // Process quiz results (you can replace this logic with your own)
    const correctAnswers = chapter.quiz.filter((question, index) =>
      question.answer === selectedAnswers[index]
    );
    alert(`You got ${correctAnswers.length} out of ${chapter.quiz.length} correct!`);
    const finalRate = correctAnswers.length * (100 / chapter.quiz.length);
    try {
      await axios.post(addRate, {
        email: localStorage.getItem("email"),
        rate: finalRate,
        chapterId: id,
      });
    } catch (error) {
      console.log(error);
    }
    // navigate('/home');
  };

  return (
    <div className="flex justify-center items-center align-center min-h-screen text-dark">
      <div className="bg-wh w-[70%] rounded-lg p-10 m-8">
        <h1 className="text-xl font-bold mb-5 text-center">{chapter.name} Quiz</h1>
        <ul>
          {chapter.quiz.map((question, index) => (
            <li key={index} className="mb-6">
              <h2 className="text-lg font-semibold">Question {index + 1}</h2>
              <p className="font-semibold mb-2">{question.question}</p>
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="mb-2">
                    <label>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={selectedAnswers[index] === option}
                        onChange={() => handleAnswerChange(index, option)}
                        disabled={submitted} // Disable radio buttons after submission
                        className="mr-2"
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>

              {/* Show the correct answer after submission */}
              {submitted && (
                <div>
                  {selectedAnswers[index] === question.answer ? (
                    <p className="text-green-600 font-semibold">
                      Correct Answer: {question.answer}
                    </p>
                  ) : (
                    <p className="text-red-600 font-semibold">
                      Correct Answer: {question.answer} (Your answer: {selectedAnswers[index]})
                    </p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {!submitted && (
          <div className="flex items-center justify-center align-center">
            <button
              onClick={handleSubmit}
              className="bg-dark text-white px-4 py-2 rounded mt-5 hover:bg-sec"
            >
              Submit Quiz
            </button>
          </div>
        )}

        {submitted && (
          <div className="mt-5 text-green-600 font-bold">
            Quiz submitted!
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
