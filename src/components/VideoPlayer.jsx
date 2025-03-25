import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ videoId, isPlaying }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isPlaying && !isLoaded) {
            setIsLoaded(true);
        }
    }, [isPlaying]);

    if (!isLoaded) return null;

    return (
        <div className="relative w-full h-full">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`}
                title="UP Summit Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
    );
};

export default VideoPlayer; 