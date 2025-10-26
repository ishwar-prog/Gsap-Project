import React from "react";

export default function RoundedVideo() {
  return (
    <div className="h-full w-full">
      <video
        className="h-full lg:w-full object-cover rounded-full"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="/video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}