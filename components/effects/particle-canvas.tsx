"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  size: number;
  alpha: number;
  targetAlpha: number;
}

interface ParticleCanvasProps {
  particleCount?: number;
  className?: string;
}

export function ParticleCanvas({
  particleCount = 8000,
  className = ""
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const colors = [
      "rgba(0, 255, 255, ",   // Cyan - core
      "rgba(255, 255, 255, ",  // White - core bright
      "rgba(139, 92, 246, ",   // Violet - mid range
      "rgba(59, 130, 246, ",   // Blue - outer
      "rgba(236, 72, 153, ",   // Magenta - outer
      "rgba(249, 115, 22, ",   // Orange - far outer
    ];

    for (let i = 0; i < particleCount; i++) {
      // Create neural network-like distribution
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * Math.max(width, height) * 0.6;

      // Asymmetric distribution for quantum feel
      const x = width / 2 + (Math.random() - 0.5) * width;
      const y = height / 2 + (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 500;

      // Determine color based on distance from center (layered approach)
      const distFromCenter = Math.sqrt(
        Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
      );
      const maxDist = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
      const colorIndex = Math.min(
        Math.floor((distFromCenter / maxDist) * colors.length),
        colors.length - 1
      );

      particles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.3,
        color: colors[colorIndex],
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.3,
        targetAlpha: Math.random() * 0.5 + 0.3,
      });
    }

    return particles;
  }, [particleCount]);

  const drawConnections = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      particles: Particle[],
      width: number,
      height: number
    ) => {
      const maxConnectionDist = 80;
      const perspective = 800;

      // Draw neural connections (lines between nearby particles)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const p1x = (p1.x - width / 2) * (perspective / (perspective + p1.z)) + width / 2;
        const p1y = (p1.y - height / 2) * (perspective / (perspective + p1.z)) + height / 2;

        // Only check nearby particles for performance
        for (let j = i + 1; j < Math.min(i + 50, particles.length); j++) {
          const p2 = particles[j];
          const p2x = (p2.x - width / 2) * (perspective / (perspective + p2.z)) + width / 2;
          const p2y = (p2.y - height / 2) * (perspective / (perspective + p2.z)) + height / 2;

          const dx = p1x - p2x;
          const dy = p1y - p2y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            const alpha = (1 - dist / maxConnectionDist) * 0.15 * p1.alpha * p2.alpha;
            ctx.beginPath();
            ctx.moveTo(p1x, p1y);
            ctx.lineTo(p2x, p2y);

            // Gradient from p1 color to p2 color
            const gradient = ctx.createLinearGradient(p1x, p1y, p2x, p2y);
            gradient.addColorStop(0, `${p1.color}${alpha})`);
            gradient.addColorStop(1, `${p2.color}${alpha})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    },
    []
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const particles = particlesRef.current;
    const perspective = 800;

    // Clear with fade effect for motion blur
    ctx.fillStyle = "rgba(10, 10, 15, 0.2)";
    ctx.fillRect(0, 0, width, height);

    // Update and draw particles
    particles.forEach((p, index) => {
      // Update position with velocity
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      // Add subtle mouse attraction
      const dx = mouseRef.current.x - p.x;
      const dy = mouseRef.current.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0 && dist < 300) {
        p.vx += (dx / dist) * 0.01;
        p.vy += (dy / dist) * 0.01;
      }

      // Apply slight rotation around center
      const centerX = width / 2;
      const centerY = height / 2;
      const angle = 0.001;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const dx_center = p.x - centerX;
      const dy_center = p.y - centerY;
      p.x = centerX + dx_center * cos - dy_center * sin;
      p.y = centerY + dx_center * sin + dy_center * cos;

      // Boundary wrapping with offset
      const margin = 100;
      if (p.x < -margin) p.x = width + margin;
      if (p.x > width + margin) p.x = -margin;
      if (p.y < -margin) p.y = height + margin;
      if (p.y > height + margin) p.y = -margin;

      // Z depth wrapping
      if (p.z < -250) p.z = 250;
      if (p.z > 250) p.z = -250;

      // Smooth alpha transition
      p.alpha += (p.targetAlpha - p.alpha) * 0.02;

      // Random alpha flicker
      if (Math.random() < 0.01) {
        p.targetAlpha = Math.random() * 0.5 + 0.3;
      }

      // Calculate 3D to 2D projection
      const scale = perspective / (perspective + p.z);
      const x2d = (p.x - width / 2) * scale + width / 2;
      const y2d = (p.y - height / 2) * scale + height / 2;
      const size = p.size * scale;

      // Draw particle with glow
      const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 2);
      gradient.addColorStop(0, `${p.color}${p.alpha})`);
      gradient.addColorStop(0.5, `${p.color}${p.alpha * 0.5})`);
      gradient.addColorStop(1, `${p.color}0)`);

      ctx.beginPath();
      ctx.arc(x2d, y2d, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    // Draw neural connections
    drawConnections(ctx, particles, width, height);

    // Draw radial glow at center
    const centerGradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      300
    );
    centerGradient.addColorStop(0, "rgba(0, 255, 255, 0.08)");
    centerGradient.addColorStop(0.3, "rgba(139, 92, 246, 0.04)");
    centerGradient.addColorStop(1, "rgba(10, 10, 15, 0)");
    ctx.fillStyle = centerGradient;
    ctx.fillRect(0, 0, width, height);

    timeRef.current += 0.016;
    animationRef.current = requestAnimationFrame(animate);
  }, [drawConnections]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const rect = container.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    // Reinitialize particles on resize
    particlesRef.current = initParticles(rect.width, rect.height);
  }, [initParticles]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, handleResize, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Additional radial glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
