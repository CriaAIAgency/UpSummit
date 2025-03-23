import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ 
    src, 
    placeholderSrc, 
    alt, 
    className, 
    objectPosition = "center" 
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Placeholder/Low Quality Image */}
            <img
                src={placeholderSrc}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-0' : 'opacity-100'
                } ${className}`}
                style={{ 
                    position: 'absolute',
                    objectPosition 
                }}
            />
            
            {/* High Quality Image */}
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                style={{ 
                    position: 'absolute',
                    objectPosition 
                }}
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
};

export default ProgressiveImage; 