import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scene, setScene] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scene transitions based on scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  // Canvas bubble animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        bubble.y -= bubble.speed;
        
        if (bubble.y < -20) {
          bubble.y = canvas.height + 20;
          bubble.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, bubble.radius
        );
        gradient.addColorStop(0, `rgba(100, 180, 140, ${bubble.opacity})`);
        gradient.addColorStop(0.5, `rgba(156, 123, 92, ${bubble.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // Auto-advance scenes
  useEffect(() => {
    const timers = [
      setTimeout(() => setScene(1), 1500),
      setTimeout(() => setScene(2), 3500),
      setTimeout(() => setScene(3), 5500)
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-black">
      {/* Sticky cinematic container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas bubbles background */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Ambient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(156,123,92,0.12) 0%, rgba(100,180,140,0.06) 40%, transparent 70%)',
            filter: 'blur(80px)',
            scale
          }}
        />

        {/* Scene 1: Black fade-in with text */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: scene >= 0 ? 0.6 : 0, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <p className="text-[#64B48C]/60 text-sm tracking-[0.5em] uppercase font-light mb-8">
              Born Refreshing
            </p>
            <div className="w-16 h-[0.5px] bg-copper/30 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Scene 2: Brand reveal */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: scene >= 1 ? 1 : 0,
              scale: scene >= 1 ? 1 : 0.95
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center relative"
          >
            {/* Main brand */}
            <h1 className="text-8xl md:text-9xl font-display font-thin text-white tracking-[0.3em] mb-6"
                style={{ textShadow: '0 0 100px rgba(156,123,92,0.4)' }}>
              FRESHOZZ
            </h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scene >= 1 ? 0.5 : 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex items-center justify-center gap-3 text-white/40 text-xs tracking-[0.4em] uppercase"
            >
              <span>Masala</span>
              <div className="w-1 h-1 rounded-full bg-copper/40" />
              <span>Mojito</span>
              <div className="w-1 h-1 rounded-full bg-mint/40" />
              <span>Zero Sugar</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scene 3: Product specs */}
        <motion.div
          style={{ opacity: opacity3 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: scene >= 2 ? 1 : 0,
              y: scene >= 2 ? 0 : 20
            }}
            transition={{ duration: 1.2 }}
            className="text-center max-w-2xl px-6"
          >
            {/* Premium specs */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-thin text-white mb-2">0%</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/30">Preservatives</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-thin text-white mb-2">0%</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/30">Sugar Calories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-thin text-white mb-2">100%</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/30">Real Flavour</div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scene >= 3 ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs tracking-[0.3em] uppercase font-light hover:bg-white/10 transition-all cursor-pointer"
              >
                Discover More ↓
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </div>
    </div>
  );
}
