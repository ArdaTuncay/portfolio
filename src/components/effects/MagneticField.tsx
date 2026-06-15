'use client';
import { useEffect, useRef } from 'react';

interface Point {
  ox: number;
  oy: number;
  x: number;
  y: number;
}

export default function MagneticField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0;
    let points: Point[] = [];
    let mouse = { x: -9999, y: -9999 };
    let animId: number;

    const GAP = 32;
    const RADIUS = 0.9;
    const INFLUENCE = 100;
    const PULL = 0.5;
    const SPRING = 0.08;
    const RETURN = 0.06;

    function buildPoints() {
      points = [];
      for (let x = GAP / 2; x < W; x += GAP) {
        for (let y = GAP / 2; y < H; y += GAP) {
          points.push({ ox: x, oy: y, x, y });
        }
      }
    }

    function resize() {
      const c = canvasRef.current;
      if (!c) return;
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
      buildPoints();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0e0e0e';
      ctx.fillRect(0, 0, W, H);

      for (const p of points) {
        const dx = mouse.x - p.ox;
        const dy = mouse.y - p.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / INFLUENCE);

        const tx = p.ox + dx * force * PULL;
        const ty = p.oy + dy * force * PULL;

        p.x += (tx - p.x) * SPRING;
        p.y += (ty - p.y) * RETURN;

        const displaced = Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2);
        const alpha = 0.2 + displaced * 0.015;

        ctx.beginPath();
        ctx.arc(p.x, p.y, RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,180,180,${Math.min(0.45, alpha)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
