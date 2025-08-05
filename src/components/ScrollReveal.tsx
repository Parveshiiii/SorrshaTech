import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) setHasAnimated(true);
          }, delay);
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, once, hasAnimated]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(0.95)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(0.95)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(0.95)`;
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;