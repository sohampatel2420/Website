// src/components/Cursor.jsx
import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursorArrow = cursorRef.current;
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', onMouseMove);

    const animateCursor = () => {
      const speed = 0.2;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      if (cursorArrow) {
        cursorArrow.style.left = cursorX + 'px';
        cursorArrow.style.top = cursorY + 'px';
      }
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // handle hover-trigger -> body.hovering
    const hoverEls = Array.from(document.querySelectorAll('.hover-trigger'));
    const addHover = () => document.body.classList.add('hovering');
    const removeHover = () => document.body.classList.remove('hovering');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div className="custom-cursor-container">
      <svg className="cursor-arrow" ref={cursorRef} viewBox="0 0 24 24">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    </div>
  );
};

export default Cursor;
