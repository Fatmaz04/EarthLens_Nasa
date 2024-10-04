import React from "react";
import { useParams } from "react-router-dom";
import chaptersData from "../../data/chaptersData"; // Adjust the path to your data file

const Video = () => {
  const { id, videoId } = useParams(); // Get the chapter ID and video ID from the URL
  const chapter = chaptersData.find((chap) => chap.id === parseInt(id));

  if (!chapter || !chapter.videos[parseInt(videoId)]) {
    return <div>Video not found</div>;
  }

  const video = chapter.videos[parseInt(videoId)];

  return (
    <div className="flex justify-center items-center min-h-screen text-dark p-4">
      <div className="bg-wh w-full max-w-4xl rounded-lg p-6 md:p-10">
        <h2 className="font-semibold text-lg text-center mb-4">{video.name}</h2>
        <div className="w-full overflow-hidden rounded-lg">
          <iframe
            src={video.link}
            width="100%"
            height="500"
            className="rounded-lg"
            allow="autoplay"
            title={video.name}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
