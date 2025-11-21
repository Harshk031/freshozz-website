import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Smooth scroll behavior
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      window.scrollBy({
        top: delta,
        behavior: 'smooth'
      });
    };

    // Only add on desktop
    if (window.innerWidth > 1024) {
      // Removed smooth scroll event as it can cause issues
      // Let CSS handle smooth scrolling instead
    }

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null;
}
