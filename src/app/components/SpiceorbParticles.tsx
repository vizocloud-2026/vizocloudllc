import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  closest: Point[];
  opacity: number;
}

export function SpiceorbParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Touch devices: no pointer — canvas stays as dark bg, skip all setup
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    let points: Point[] = [];

    const buildPoints = () => {
      const w = canvas.width;
      const h = canvas.height;
      points = [];

      // Grid spacing — roughly 20 columns × 20 rows
      const cols = Math.round(w / (w / 20));
      const sx = w / cols;
      const sy = h / Math.round(h / (h / 20));

      for (let x = sx / 2; x < w; x += sx) {
        for (let y = sy / 2; y < h; y += sy) {
          // Add ±25% random jitter so it looks organic, not grid-like
          const px = x + (Math.random() - 0.5) * sx * 0.5;
          const py = y + (Math.random() - 0.5) * sy * 0.5;
          points.push({
            x: px, y: py,
            originX: px, originY: py,
            targetX: px + (Math.random() - 0.5) * 120,
            targetY: py + (Math.random() - 0.5) * 120,
            closest: [],
            opacity: 0,
          });
        }
      }

      // Pre-compute 5 nearest neighbours for each point (static topology)
      for (const p of points) {
        p.closest = points
          .filter(q => q !== p)
          .sort((a, b) =>
            (p.originX - a.originX) ** 2 + (p.originY - a.originY) ** 2 -
            ((p.originX - b.originX) ** 2 + (p.originY - b.originY) ** 2)
          )
          .slice(0, 5);
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (!isTouch) buildPoints();
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    if (isTouch) {
      // Nothing to animate on touch — return early after resize listener
      return () => window.removeEventListener('resize', resize);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    let rafId: number | null = null;

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ── Update points ──────────────────────────────────────────
      for (const p of points) {
        // Drift slowly toward target (lerp)
        p.x += (p.targetX - p.x) * 0.012;
        p.y += (p.targetY - p.y) * 0.012;

        // When close to target, choose a new drift target within ±60px of origin
        if (Math.abs(p.x - p.targetX) < 0.8 && Math.abs(p.y - p.targetY) < 0.8) {
          p.targetX = p.originX + (Math.random() - 0.5) * 120;
          p.targetY = p.originY + (Math.random() - 0.5) * 120;
        }

        // Opacity zones based on squared distance to cursor
        // Zone 1: < ~130px  → full reveal
        // Zone 2: < ~260px  → medium
        // Zone 3: < ~400px  → faint
        // Beyond            → invisible
        const dx = mx - p.x;
        const dy = my - p.y;
        const d2 = dx * dx + dy * dy;

        if      (d2 < 17000)  p.opacity = 0.6;
        else if (d2 < 70000)  p.opacity = 0.3;
        else if (d2 < 160000) p.opacity = 0.1;
        else                  p.opacity = 0;
      }

      // ── Draw lines (batched by opacity bucket) ─────────────────
      // Possible line opacities (min of two endpoints × 0.5):
      //   0.6+0.6 → 0.30 | 0.6+0.3 / 0.3+0.3 → 0.15 | anything with 0.1 → 0.05
      const LB: [number[], number[], number[]] = [[], [], []];

      for (const p of points) {
        if (p.opacity === 0) continue;
        for (const q of p.closest) {
          if (q.opacity === 0) continue;
          const minOp = p.opacity < q.opacity ? p.opacity : q.opacity;
          const bi = minOp >= 0.6 ? 0 : minOp >= 0.3 ? 1 : 2;
          LB[bi].push(p.x, p.y, q.x, q.y);
        }
      }

      ctx.lineWidth = 0.6;
      const lineAlphas = [0.30, 0.15, 0.05] as const;
      for (let i = 0; i < 3; i++) {
        if (LB[i].length === 0) continue;
        ctx.strokeStyle = `rgba(156,217,249,${lineAlphas[i]})`;
        ctx.beginPath();
        const b = LB[i];
        for (let j = 0; j < b.length; j += 4) {
          ctx.moveTo(b[j],     b[j + 1]);
          ctx.lineTo(b[j + 2], b[j + 3]);
        }
        ctx.stroke();
      }

      // ── Draw circles (batched by opacity bucket) ────────────────
      // Radius scales with opacity so inner points feel "brighter"
      const CB: [number[], number[], number[]] = [[], [], []];
      for (const p of points) {
        if (p.opacity === 0) continue;
        const bi = p.opacity >= 0.6 ? 0 : p.opacity >= 0.3 ? 1 : 2;
        CB[bi].push(p.x, p.y);
      }

      const circleAlphas = [0.6, 0.3, 0.1] as const;
      const circleRadii  = [3,   2,   1.2] as const;
      for (let i = 0; i < 3; i++) {
        if (CB[i].length === 0) continue;
        ctx.fillStyle = `rgba(156,217,249,${circleAlphas[i]})`;
        ctx.beginPath();
        const b = CB[i];
        const r = circleRadii[i];
        for (let j = 0; j < b.length; j += 2) {
          ctx.moveTo(b[j] + r, b[j + 1]);
          ctx.arc(b[j], b[j + 1], r, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      rafId = requestAnimationFrame(animate);
    };

    const startLoop = () => { if (rafId === null) rafId = requestAnimationFrame(animate); };
    const stopLoop  = () => { if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; } };

    // Pause animation when hero is scrolled off-screen
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startLoop() : stopLoop()),
      { threshold: 0 }
    );
    observer.observe(canvas);
    startLoop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      stopLoop();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Static background with subtle nebula tints */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.5) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.5) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,43,43,0.5) 0%, transparent 70%)' }}
        />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
    </>
  );
}
