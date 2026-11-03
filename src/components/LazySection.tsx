import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  id?: string;
  minHeight?: string | number;
  rootMargin?: string;
  className?: string;
  fallbackTitle?: string;
}

/**
 * LazySection : Rendu différé au scroll via IntersectionObserver
 * - Économise la mémoire et le thread CPU sur les smartphones 3G/4G
 * - Prévient les sauts de mise en page (zéro Cumulative Layout Shift)
 * - Déclenche le chargement 250px avant l'entrée dans le viewport
 * - Force le rendu immédiat si un lien ancre (#section-...) pointe vers lui
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  id,
  minHeight = '300px',
  rootMargin = '250px',
  className = '',
  fallbackTitle
}) => {
  const [isVisible, setIsVisible] = useState(() => {
    // Si l'utilisateur arrive avec un lien direct avec ancre, on affiche immédiatement
    if (typeof window !== 'undefined' && id && window.location.hash === `#${id}`) {
      return true;
    }
    return false;
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) return;

    // Si le hash de la page change vers cet id, on monte directement
    const handleHashChange = () => {
      if (id && window.location.hash === `#${id}`) {
        setIsVisible(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    // Fallback pour navigateurs sans IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isVisible, id, rootMargin]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={{ minHeight: !isVisible ? minHeight : undefined }}
    >
      {isVisible ? (
        children
      ) : (
        <div
          className="flex flex-col items-center justify-center p-8 text-neutral-400 animate-pulse text-center"
          style={{ minHeight }}
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full border-2 border-amber-300 border-t-amber-600 animate-spin mb-2"></div>
          {fallbackTitle && (
            <span className="text-xs font-semibold text-neutral-400">
              {fallbackTitle}...
            </span>
          )}
        </div>
      )}
    </div>
  );
};
