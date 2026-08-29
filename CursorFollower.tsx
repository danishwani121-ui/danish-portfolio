import React, { useEffect, useState, useRef } from 'react';

export const CursorFollower: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const idleTimer = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only run on fine-pointer devices (desktop/mouse)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      if (idleTimer.current) {
        window.clearTimeout(idleTimer.current);
      }

      // Hide after 2 seconds of inactivity
      idleTimer.current = window.setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing physics loop
    const animate = () => {
      // Ease toward target (0.18 factor for responsive, natural trailing)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.18;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full pointer-events-none z-50 transition-opacity duration-300 ease-out will-change-transform ${
        visible ? 'opacity-70' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle, rgba(165, 243, 252, 0.9) 0%, rgba(6, 182, 212, 0.4) 70%, transparent 100%)',
        boxShadow: '0 0 8px rgba(6, 182, 212, 0.35)',
      }}
    />
  );
};
