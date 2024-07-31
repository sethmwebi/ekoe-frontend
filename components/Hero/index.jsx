"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, isPlaying] = useState(true);
  const [height, setHeight] = useState();
  const playerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [videoReady]);

  useLayoutEffect(() => {
    if (playerRef.current) setHeight(playerRef.current.clientHeight);
  }, []);

  const togglePlayPause = () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    }
  };

  return (
    <div
      className={`mb-10 md:mb-20 mt-[48px] ${
        videoReady
          ? `h-[${height}px]`
          : "h-[30vh] sm:h-[60vh] md:h-[80vh] lg:h-[calc(100vh-50px)]"
      } w-full md:mt-[50px] rounded-[15px] overflow-hidden relative`}
    >
      {!videoReady && <Image src="/hero.jpg" fill />}
      <div style={{ width: "100%", height: height }}>
        {videoReady && (
          <div className="absolute z-[95] bg-accent top-4 right-4 md:top-8 md:right-8 p-2 rounded-full">
            {playing ? (
              <Pause
                onClick={togglePlayPause}
                className="cursor-pointer h-6 w-6"
              />
            ) : (
              <Play
                onClick={togglePlayPause}
                className="cursor-pointer h-6 w-6"
              />
            )}
          </div>
        )}
        {hasWindow && (
          <ReactPlayer
            ref={playerRef}
            url="/video.mp4" // Corrected URL
            width="100%"
            height="100%"
            playing
            onReady={() => {
              setVideoReady(true);
              isPlaying(false);
            }}
            onPause={() => isPlaying(false)}
            onPlay={() => isPlaying(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
