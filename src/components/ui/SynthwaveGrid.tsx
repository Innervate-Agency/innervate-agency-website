import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SynthwaveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Add event listeners for interactive effects
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a dark gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, "rgba(13, 10, 38, 0.9)");
      bgGradient.addColorStop(1, "rgba(20, 8, 44, 0.9)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid settings
      const cellSize = 60;
      const rows = Math.ceil(canvas.height / cellSize) + 10;
      const cols = Math.ceil(canvas.width / cellSize) + 2;

      // Perspective vanishing point
      const vanishX = canvas.width / 2;
      const vanishY = canvas.height * 0.3;

      // Mouse interaction variables
      const distortionFactor = isHovering ? 0.2 : 0.05;
      const distortionSpeed = time * 0.02;
      const distortionAmount = Math.sin(distortionSpeed) * 15;

      // Draw vertical lines with dynamic glow effects
      for (let x = 0; x < cols; x++) {
        const xPos = x * cellSize - ((canvas.width / 2) % cellSize);
        const gradient = ctx.createLinearGradient(
          xPos,
          canvas.height,
          xPos,
          vanishY
        );

        // More vibrant colors
        gradient.addColorStop(0, "rgba(255, 80, 100, 0.8)");
        gradient.addColorStop(0.5, "rgba(255, 50, 120, 0.4)");
        gradient.addColorStop(1, "rgba(180, 20, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(xPos, canvas.height);

        // Calculate perspective curve with mouse interaction
        for (let y = 0; y < canvas.height; y += 5) {
          const progress = y / canvas.height;
          const curve = Math.sin((progress * Math.PI) / 2);

          // Apply distortion based on mouse position and time
          const distX = xPos - mousePosition.x;
          const distY = canvas.height - y - mousePosition.y;
          const distance = Math.sqrt(distX * distX + distY * distY);
          const maxDist =
            Math.sqrt(
              canvas.width * canvas.width + canvas.height * canvas.height
            ) / 2;
          const influence = isHovering
            ? Math.max(0, 1 - distance / (maxDist / 2))
            : 0;

          const xOffset =
            influence *
            distortionAmount *
            Math.sin(distance / 50 - time * 0.1) *
            distortionFactor;
          const x = xPos + (vanishX - xPos) * curve + xOffset;

          ctx.lineTo(x, canvas.height - y);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = isHovering ? 1.5 : 1;
        ctx.stroke();
      }

      // Draw horizontal lines with movement and glow effects
      for (let y = 0; y < rows; y++) {
        const yProgress = y / rows;
        const yPos =
          ((y * cellSize + time * 1.5) % (canvas.height + cellSize * 2)) -
          cellSize;
        const progress = 1 - yPos / canvas.height;

        const gradient = ctx.createLinearGradient(0, yPos, canvas.width, yPos);

        // Dynamic colors based on position and time
        const alpha = 0.5 * progress;
        const glowEffect = Math.sin(time * 0.05 + y * 0.2) * 0.2 + 0.8;

        gradient.addColorStop(0, `rgba(80, 120, 255, 0)`);
        gradient.addColorStop(0.3, `rgba(255, 80, 150, ${alpha * glowEffect})`);
        gradient.addColorStop(0.7, `rgba(255, 80, 150, ${alpha * glowEffect})`);
        gradient.addColorStop(1, `rgba(80, 120, 255, 0)`);

        ctx.beginPath();

        // Draw wavy horizontal lines
        for (let x = 0; x < canvas.width; x += 5) {
          const xProgress = x / canvas.width;
          const waveHeight = isHovering ? 6 : 3;
          const waveFreq = 0.03;
          const yOffset =
            Math.sin(x * waveFreq + time * 0.2) * waveHeight * progress;

          // Apply mouse interaction
          const distX = x - mousePosition.x;
          const distY = yPos - mousePosition.y;
          const distance = Math.sqrt(distX * distX + distY * distY);
          const maxDist = 200;
          const influence = isHovering
            ? Math.max(0, 1 - distance / maxDist)
            : 0;
          const mouseEffect = influence * 15 * Math.sin(time * 0.1);

          if (x === 0) {
            ctx.moveTo(x, yPos + yOffset + mouseEffect * progress);
          } else {
            ctx.lineTo(x, yPos + yOffset + mouseEffect * progress);
          }
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2 * progress;
        ctx.stroke();

        // Add glow effect for horizontal lines
        if (progress > 0.7 && isHovering) {
          ctx.save();
          ctx.filter = "blur(4px)";
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 4 * progress;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Add sun/moon glow in the background
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.3;
      const sunRadius = canvas.width * 0.1;

      // Sun/moon glow
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        sunRadius * 2
      );
      glow.addColorStop(0, "rgba(255, 120, 50, 0.5)");
      glow.addColorStop(0.5, "rgba(255, 50, 120, 0.2)");
      glow.addColorStop(1, "rgba(255, 50, 120, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sunRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      time += isHovering ? 1.5 : 1;
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener("resize", resize);
    resize();
    drawGrid();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, isHovering]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
    </motion.div>
  );
}
