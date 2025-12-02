import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo3DProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Logo3D({ size = 'lg', className = '' }: Logo3DProps) {
  const sizes = {
    sm: { width: 80, height: 80 },
    md: { width: 120, height: 120 },
    lg: { width: 180, height: 180 },
    xl: { width: 250, height: 250 }
  };

  const { width, height } = sizes[size];

  return (
    <div className={`relative ${className}`} style={{ perspective: '1000px' }}>
      {/* Glow effect behind logo */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(156,123,92,0.3) 0%, transparent 70%)',
          transform: 'translateZ(-50px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Shadow on ground */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-warm/20 rounded-full blur-xl"
        animate={{
          scaleX: [0.8, 1, 0.8],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main 3D Logo Container */}
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, 3, 0, -3, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Logo with 3D depth layers */}
        <motion.div
          className="relative"
          whileHover={{
            rotateY: 15,
            rotateX: -10,
            scale: 1.05,
            transition: { duration: 0.4 }
          }}
        >
          {/* Back shadow layer */}
          <div 
            className="absolute inset-0 opacity-30 blur-sm"
            style={{ 
              transform: 'translateZ(-20px) scale(1.05)',
              filter: 'brightness(0.3)'
            }}
          >
            <Image
              src="/logo.png"
              alt=""
              width={width}
              height={height}
              className="w-full h-auto"
            />
          </div>

          {/* Main logo */}
          <motion.div
            style={{ transform: 'translateZ(0)' }}
            animate={{
              filter: [
                'drop-shadow(0 10px 20px rgba(156,123,92,0.2))',
                'drop-shadow(0 20px 30px rgba(156,123,92,0.3))',
                'drop-shadow(0 10px 20px rgba(156,123,92,0.2))'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/logo.png"
              alt="Freshozz Logo"
              width={width}
              height={height}
              className="w-full h-auto relative z-10"
              priority
            />
          </motion.div>

          {/* Shine overlay effect */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-lg"
            style={{ 
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)',
              transform: 'translateZ(10px)'
            }}
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
