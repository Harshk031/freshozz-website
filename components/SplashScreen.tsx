import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hasSeenSplash = sessionStorage.getItem('freshozzSplashV8');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => handleExit(), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('freshozzSplashV8', 'true');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream cursor-pointer overflow-hidden"
          onClick={handleExit}
        >
          {/* Ambient glow */}
          <motion.div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-copper/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* 3D Panda with CSS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ 
              opacity: isExiting ? 0 : 1, 
              scale: isExiting ? 0.9 : 1,
              rotateY: isExiting ? 30 : 0,
              y: isExiting ? -30 : 0
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
            style={{ perspective: '1000px' }}
          >
            {/* Animated 3D Panda SVG */}
            <motion.div
              animate={{ 
                rotateY: [0, 8, 0, -8, 0],
                rotateX: [0, 3, 0, -3, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <svg width="280" height="320" viewBox="0 0 280 320" className="drop-shadow-2xl">
                {/* Shadow */}
                <ellipse cx="140" cy="300" rx="60" ry="15" fill="#2D2420" opacity="0.15">
                  <animate attributeName="rx" values="60;70;60" dur="2s" repeatCount="indefinite" />
                </ellipse>

                {/* Body */}
                <ellipse cx="140" cy="220" rx="70" ry="80" fill="#FAF7F2" stroke="#2D2420" strokeWidth="3">
                  <animate attributeName="ry" values="80;83;80" dur="2s" repeatCount="indefinite" />
                </ellipse>

                {/* Left Arm */}
                <ellipse cx="75" cy="200" rx="25" ry="45" fill="#2D2420">
                  <animateTransform attributeName="transform" type="rotate" values="-5,75,180;5,75,180;-5,75,180" dur="2s" repeatCount="indefinite" />
                </ellipse>

                {/* Right Arm + Bottle */}
                <g>
                  <animateTransform attributeName="transform" type="rotate" values="0,205,180;12,205,180;0,205,180" dur="1.5s" repeatCount="indefinite" />
                  <ellipse cx="205" cy="200" rx="25" ry="45" fill="#2D2420" />
                  
                  {/* Bottle */}
                  <rect x="218" y="140" width="22" height="55" rx="5" fill="#9C7B5C" />
                  <rect x="221" y="132" width="16" height="12" rx="3" fill="#6B5344" />
                  <ellipse cx="229" cy="195" rx="14" ry="8" fill="#9C7B5C" />
                  
                  {/* Bubbles */}
                  <circle cx="226" cy="160" r="3" fill="#FAF7F2" opacity="0.7">
                    <animate attributeName="cy" values="160;145;160" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="232" cy="170" r="2" fill="#FAF7F2" opacity="0.5">
                    <animate attributeName="cy" values="170;152;170" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Feet */}
                <ellipse cx="105" cy="290" rx="28" ry="18" fill="#2D2420" />
                <ellipse cx="175" cy="290" rx="28" ry="18" fill="#2D2420" />

                {/* Head */}
                <circle cx="140" cy="100" r="70" fill="#FAF7F2" stroke="#2D2420" strokeWidth="3">
                  <animate attributeName="r" values="70;72;70" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Left Ear */}
                <circle cx="80" cy="45" r="28" fill="#2D2420">
                  <animateTransform attributeName="transform" type="rotate" values="-3,80,60;3,80,60;-3,80,60" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Right Ear */}
                <circle cx="200" cy="45" r="28" fill="#2D2420">
                  <animateTransform attributeName="transform" type="rotate" values="3,200,60;-3,200,60;3,200,60" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Eye Patches */}
                <ellipse cx="105" cy="95" rx="25" ry="20" fill="#2D2420" transform="rotate(-10,105,95)" />
                <ellipse cx="175" cy="95" rx="25" ry="20" fill="#2D2420" transform="rotate(10,175,95)" />

                {/* Eyes */}
                <circle cx="105" cy="95" r="12" fill="#FAF7F2" />
                <circle cx="175" cy="95" r="12" fill="#FAF7F2" />
                
                {/* Pupils - Blinking */}
                <circle cx="108" cy="95" r="6" fill="#2D2420">
                  <animate attributeName="ry" values="6;6;1;6;6" dur="4s" repeatCount="indefinite" keyTimes="0;0.4;0.45;0.5;1" />
                </circle>
                <circle cx="178" cy="95" r="6" fill="#2D2420">
                  <animate attributeName="ry" values="6;6;1;6;6" dur="4s" repeatCount="indefinite" keyTimes="0;0.4;0.45;0.5;1" />
                </circle>

                {/* Eye Highlights */}
                <circle cx="110" cy="92" r="2.5" fill="white" />
                <circle cx="180" cy="92" r="2.5" fill="white" />

                {/* Nose */}
                <ellipse cx="140" cy="115" rx="12" ry="8" fill="#2D2420" />

                {/* Smile */}
                <path d="M 125 130 Q 140 145 155 130" fill="none" stroke="#2D2420" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="d" values="M 125 130 Q 140 145 155 130;M 125 130 Q 140 150 155 130;M 125 130 Q 140 145 155 130" dur="3s" repeatCount="indefinite" />
                </path>

                {/* Blush */}
                <circle cx="70" cy="115" r="12" fill="#E8B4A0" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="210" cy="115" r="12" fill="#E8B4A0" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </motion.div>
          </motion.div>

          {/* Brand Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -10 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-6 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-warm tracking-tight">
              FRESHOZZ
            </h1>
            <p className="text-copper/50 text-xs tracking-[0.2em] uppercase mt-2 font-display">
              Sip the Freshness
            </p>
          </motion.div>

          {/* Tap hint */}
          <motion.p
            className="absolute bottom-8 text-warm/25 text-[10px] tracking-[0.2em] uppercase"
            animate={{ opacity: isExiting ? 0 : [0, 0.4, 0] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          >
            Tap to enter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
