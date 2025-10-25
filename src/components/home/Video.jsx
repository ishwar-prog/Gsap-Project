import React from "react";

// Single default export to keep HMR stable (avoid adding/removing named exports)
export default function Video() {
  return (
    <div className="h-screen w-full">
      <video
        className="h-full w-full object-cover"
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
