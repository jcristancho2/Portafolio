import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ElectronicBackground() {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext); // Obtiene el tema actual

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const nodes = [];
    const particles = [];
    const nodeCount = 80;
    const connectionDistance = 120;
    const repulsionStrength = 0.05;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    let animationId;

    const animate = () => {
      // Cambia el fondo según el tema
      ctx.fillStyle =
        theme === 'dark'
          ? 'rgba(37, 35, 35, 0.9)' // Fondo oscuro
          : 'rgba(240,240,240,0.9)'; // Fondo claro
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mover nodos y aplicar repulsión
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 30) {
            node.vx += (dx / dist) * repulsionStrength;
            node.vy += (dy / dist) * repulsionStrength;
          }
        }
      });

      // Dibujar conexiones ondulantes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            const hue =
              theme === 'dark'
                ? 200 + Math.sin(Date.now() * 0.002 + i + j) * 50
                : 210 + Math.sin(Date.now() * 0.002 + i + j) * 30;
            ctx.strokeStyle =
              theme === 'dark'
                ? `hsla(${hue}, 70%, 60%, 0.3)`
                : `hsla(${hue}, 60%, 40%, 0.2)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            const midX =
              (nodes[i].x + nodes[j].x) / 2 +
              Math.sin(Date.now() * 0.005 + i) * 10;
            const midY =
              (nodes[i].y + nodes[j].y) / 2 +
              Math.cos(Date.now() * 0.005 + j) * 10;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.quadraticCurveTo(midX, midY, nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Dibujar nodos
      nodes.forEach((node, index) => {
        const hue =
          theme === 'dark'
            ? 200 + Math.sin(Date.now() * 0.002 + index) * 50
            : 210 + Math.sin(Date.now() * 0.002 + index) * 30;
        ctx.fillStyle =
          theme === 'dark'
            ? `hsla(${hue}, 70%, 60%, 0.8)`
            : `hsla(${hue}, 60%, 40%, 0.7)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Partículas flotantes
      if (Math.random() > 0.96) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          life: 2,
          size: Math.random() * 2 + 1,
          color:
            theme === 'dark'
              ? `hsl(${Math.random() * 60 + 180}, 80%, 60%)`
              : `hsl(${Math.random() * 40 + 200}, 60%, 40%)`,
        });
      }

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        if (p.life <= 0) particles.splice(i, 1);
        else {
          ctx.fillStyle = p.color.replace(')', `, ${p.life})`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]); // <- Escucha cambios de tema

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
