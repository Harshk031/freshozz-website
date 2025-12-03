import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Parallax transforms
  const x1 = useTransform(mouseX, [-500, 500], [-20, 20]);
  const y1 = useTransform(mouseY, [-500, 500], [-20, 20]);
  const x2 = useTransform(mouseX, [-500, 500], [-10, 10]);
  const y2 = useTransform(mouseY, [-500, 500], [-10, 10]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Mouse tracking for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Faster auto-progress
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(handleExit, 300);
          return 100;
        }
        return p + 2.5; // Complete in 4 seconds
      });
    }, 100);

    // WebGL particle system
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
          x: number;
          y: number;
          vx: number;
          vy: number;
          life: number;
          maxLife: number;
          size: number;
          color: string;
        }> = [];

        for (let i = 0; i < 100; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 100,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -0.5 - Math.random() * 1.5,
            life: 1,
            maxLife: 1,
            size: Math.random() * 2 + 0.5,
            color: Math.random() > 0.5 ? 'rgba(100,180,140,' : 'rgba(156,123,92,'
          });
        }

        const animate = () => {
          ctx.fillStyle = 'rgba(0,0,0,0.05)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.003;

            if (p.y < -10 || p.life <= 0) {
              p.x = Math.random() * canvas.width;
              p.y = canvas.height + 10;
              p.life = 1;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color + (p.life * 0.4) + ')';
            ctx.fill();
          });

          requestAnimationFrame(animate);
        };
        animate();
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(progressInterval);
    };
  }, []);

  const handleExit = () => {
    setProgress(100);
    setTimeout(() => setIsVisible(false), 600);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer overflow-hidden"
          onClick={handleExit}
        >
          {/* Canvas particle system */}
          <canvas ref={canvasRef} className="absolute inset-0" />

          {/* Dynamic background glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{
              background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(156,123,92,0.08), transparent 70%)',
              x: x2,
              y: y2
            }}
          />

          {/* Main content with parallax */}
          <motion.div
            className="relative z-20 text-center"
            style={{ x: x1, y: y1 }}
          >
            {/* Ultra-fast brand reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-thin text-white tracking-[0.25em] mb-4"
                  style={{ textShadow: '0 0 80px rgba(156,123,92,0.3)' }}>
                FRESHOZZ
              </h1>
              
              {/* Animated underline */}
              <motion.div
                className="h-[1px] bg-gradient-to-r from-transparent via-copper to-transparent mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: progress > 20 ? '160px' : 0 }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: progress > 30 ? 0.5 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/50 text-xs tracking-[0.5em] uppercase font-light"
              >
                Masala × Mojito × Zero Sugar
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Progress bar - ultra minimal */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-copper via-white to-mint origin-left"
              style={{ scaleX: progress / 100 }}
            />
          </motion.div>

          {/* Skip button */}
          <motion.button
            className="absolute bottom-4 right-4 text-white/20 text-[9px] tracking-widest uppercase hover:text-white/40 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
