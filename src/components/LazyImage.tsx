import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  aspectRatio?: string;
}

/**
 * LazyImage : Image à chargement différé optimisée pour réseaux 3G/4G
 * - loading="lazy" natif du navigateur
 * - decoding="async" pour libérer le thread principal
 * - Squelette de chargement doux sans décalage de mise en page (CLS)
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  skeletonClassName = 'bg-amber-100/60',
  aspectRatio,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio ? `aspect-[${aspectRatio}]` : ''}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 animate-pulse ${skeletonClassName} flex items-center justify-center`}
        >
          <div className="w-5 h-5 rounded-full border-2 border-amber-300 border-t-amber-600 animate-spin opacity-40"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
