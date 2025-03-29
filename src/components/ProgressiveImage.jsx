import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ 
    src, 
    placeholderSrc, 
    alt, 
    className, 
    objectPosition = "center" 
}) => {
    const [isMainLoaded, setIsMainLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsMainLoaded(true);
        };
    }, [src]);

    return (
        <div className="relative w-full h-full">
            {/* Base/WebP image - sempre visível inicialmente */}
            <img
                src={placeholderSrc}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition }}
            />
            
            {/* Main image - aparece com fade quando carregada */}
            <img
                src={src}
                alt={alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    isMainLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                style={{ objectPosition }}
            />
        </div>
    );
};

export default ProgressiveImage; 