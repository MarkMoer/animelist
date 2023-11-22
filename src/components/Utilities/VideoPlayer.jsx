"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ yotubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const option = {
    width: "300",
    height: "250",
  };

  const handleVideo = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-3 right-3">
        <button
          onClick={handleVideo}
          className="text-color-accent float-right bg-color-secondary px-3 mb-1 font-bold"
        >
          x
        </button>
        <YouTube
          videoId={yotubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenVideo = () => {
    return (
      <button
        onClick={handleVideo}
        className=" rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark font-semibold hover:bg-color-secondary hover:text-color-primary transition-all"
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenVideo />;
};
export default VideoPlayer;
