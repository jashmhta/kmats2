import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating orbs array
    const orbs = [];
    const orbCount = 8; // Reduced from 50 for subtlety

    // Create floating orbs
    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 40 + 20, // Larger, softer orbs
        opacity: Math.random() * 0.15 + 0.05, // More subtle opacity
        hue: Math.random() * 60 + 170, // Blue-cyan range
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw orbs
      orbs.forEach((orb) => {
        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges with smooth transition
        if (orb.x < -orb.size || orb.x > canvas.width + orb.size) {
          orb.vx *= -1;
        }
        if (orb.y < -orb.size || orb.y > canvas.height + orb.size) {
          orb.vy *= -1;
        }

        // Create gradient for soft glow effect
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.size
        );
        gradient.addColorStop(0, `hsla(${orb.hue}, 70%, 60%, ${orb.opacity})`);
        gradient.addColorStop(0.7, `hsla(${orb.hue}, 70%, 60%, ${orb.opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 70%, 60%, 0)`);

        // Draw orb with glow
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{ background: 'transparent' }}
    />
  );
}

