import React, { useRef, useState } from 'react';

interface AnimatedHeadingProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  flowColor?: string; // New prop for custom flow color
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ children, as = 'h2', className, flowColor }) => {
  const Tag = as;
  const ref = useRef<HTMLHeadingElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const chars = children.split('');

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    // Find which character the mouse is over
    let foundIdx: number | null = null;
    for (let i = 0; i < charRefs.current.length; i++) {
      const span = charRefs.current[i];
      if (span) {
        const rect = span.getBoundingClientRect();
        const spanLeft = rect.left - left;
        const spanRight = spanLeft + rect.width;
        if (x >= spanLeft && x <= spanRight) {
          foundIdx = i;
          break;
        }
      }
    }
    // Fallback to proportional mapping if not found
    if (foundIdx === null) {
      const { width } = ref.current.getBoundingClientRect();
      foundIdx = Math.round((x / width) * (chars.length - 1));
    }
    setHoverIdx(foundIdx);
  };

  const handleMouseLeave = () => setHoverIdx(null);

  return (
    <Tag
      ref={ref}
      className={`relative inline-block font-bold cursor-pointer select-none ${className || ''}`}
      style={{ overflow: 'visible', letterSpacing: '0.01em' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {chars.map((char, i) => {
        let scale = 1, translateY = 0, fontWeight = 300, color = 'inherit'; // font-light by default
        if (hoverIdx !== null) {
          const dist = Math.abs(i - hoverIdx);
          if (dist === 0) {
            scale = 1.08;
            translateY = -2;
            fontWeight = 800;
            color = flowColor || 'inherit';
          } else if (dist === 1) {
            scale = 1.04;
            translateY = -1;
            fontWeight = 700;
          } else if (dist === 2) {
            scale = 1.01;
            translateY = 0;
            fontWeight = 400;
          }
        }
        return (
          <span
            key={i}
            ref={el => (charRefs.current[i] = el)}
            style={{
              display: 'inline-block',
              transition: 'transform 0.35s cubic-bezier(.4,1,.6,1), font-weight 0.35s, color 0.35s',
              transform: `scale(${scale}) translateY(${translateY}px)`,
              fontWeight,
              color,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </Tag>
  );
}; 