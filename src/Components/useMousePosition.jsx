import { useState, useEffect } from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseStopped, setIsMouseStopped] = useState(true);
  let lastMousePosition = { x: 0, y: 0 };
  let timeout;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
      clearTimeout(timeout); // Clear the existing timeout
      setIsMouseStopped(false);
      lastMousePosition = { x: event.clientX, y: event.clientY };

      // Set a timeout to check if mouse stops moving after 1 second
      timeout = setTimeout(() => {
        setIsMouseStopped(true);
      }, 100); // 1000 milliseconds = 1 second
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout); // Clear the timeout on unmount
    };
  }, []);

  return { mousePosition, isMouseStopped };
}

export default useMousePosition;
