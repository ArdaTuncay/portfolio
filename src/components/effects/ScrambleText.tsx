'use client';
import { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%';

export default function ScrambleText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const totalFrames = 40;
    let rafId: number;

    const timeout = setTimeout(() => {
      function animate() {
        let output = '';
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            output += ' ';
            continue;
          }
          const progress =
            (frame - (i * totalFrames) / text.length) /
            ((totalFrames / text.length) * 1.2);
          if (progress > 1) output += text[i];
          else output += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        el.textContent = output;
        if (frame++ < totalFrames + text.length) {
          rafId = requestAnimationFrame(animate);
        } else {
          el.textContent = text;
        }
      }
      animate();
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [text, delay]);

  return <span ref={ref}>{text}</span>;
}
