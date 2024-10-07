import React from 'react';

function VideoPlayer({ currentVideo }) {
  return (
    <div className="flex-grow p-5">
      {currentVideo && (
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full border-none"
            src={`https://www.youtube.com/embed/${currentVideo}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;