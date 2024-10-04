import React from "react";
import { useParams, Link } from "react-router-dom";
import chaptersData from "../../data/chaptersData";
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

const Chapter = () => {
  const { id } = useParams();
  const chapter = chaptersData.find((chapter) => chapter.id === parseInt(id));

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="flex justify-center items-center align-center min-h-screen text-dark">
      <div className="bg-wh w-[70%] rounded-lg p-10">
        <h1 className="text-center font-bold text-4xl">
          {chapter.chapterName}
        </h1>

        {/* List of Videos */}
        <h2 className="font-semibold text-xl"> Videos</h2>
        <ul className="mx-4 my-2">
          {chapter.videos.map((video, index) => (
            <li key={index}>
              {/* Navigate to the specific video */}
              <Link to={`/chapter/${id}/video/${index}`}>
                <div className="bg-mint my-2 p-2 rounded-sm flex flex-row justify-between">
                  <p>{video.name}</p>
                  <LaunchRoundedIcon/>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* List of Quiz Questions */}
        <h2 className="font-semibold text-xl">Quiz</h2>
        <ul className="mx-4 my-2">
            <li>
              {/* Navigate to the specific quiz */}
              <Link to={`/chapter/${id}/quiz`}>
                <div className="bg-mint my-2 p-2 rounded-sm flex flex-row justify-between">
                  <p>Questions</p>
                  <LaunchRoundedIcon/>
                </div>
              </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Chapter;
