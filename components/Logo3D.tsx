import { motion } from 'framer-motion';

interface Logo3DProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Logo3D({ size = 'lg', className = '' }: Logo3DProps) {
  const sizes = {
    sm: 120,
    md: 180,
    lg: 250,
    xl: 320
  };

  const s = sizes[size];

  return (
    <div className={`relative ${className}`} style={{ width: s, height: s }}>
      {/* Glow behind panda */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl bg-copper/20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shadow */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-warm/30 rounded-full blur-xl"
        animate={{ scaleX: [0.8, 1.1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Panda SVG */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Body */}
        <motion.ellipse
          cx="100" cy="140" rx="55" ry="45"
          fill="#FAF7F2"
          stroke="#3D3229"
          strokeWidth="3"
          animate={{ ry: [45, 47, 45] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Left Arm */}
        <motion.ellipse
          cx="55" cy="130" rx="18" ry="30"
          fill="#3D3229"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '55px 110px' }}
        />

        {/* Right Arm holding bottle */}
        <motion.g
          animate={{ rotate: [-3, 8, -3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '145px 110px' }}
        >
          <ellipse cx="145" cy="130" rx="18" ry="30" fill="#3D3229" />
          
          {/* Bottle */}
          <motion.g
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '160px 100px' }}
          >
            <rect x="152" y="85" width="16" height="40" rx="3" fill="#9C7B5C" />
            <rect x="154" y="80" width="12" height="8" rx="2" fill="#6B5344" />
            <ellipse cx="160" cy="125" rx="10" ry="6" fill="#9C7B5C" />
            {/* Bubbles */}
            <motion.circle
              cx="158" cy="95" r="2" fill="#FAF7F2"
              animate={{ y: [0, -15, 0], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="162" cy="100" r="1.5" fill="#FAF7F2"
              animate={{ y: [0, -12, 0], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.g>
        </motion.g>

        {/* Head */}
        <motion.circle
          cx="100" cy="75" r="50"
          fill="#FAF7F2"
          stroke="#3D3229"
          strokeWidth="3"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Left Ear */}
        <motion.circle
          cx="60" cy="35" r="20"
          fill="#3D3229"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '60px 50px' }}
        />

        {/* Right Ear */}
        <motion.circle
          cx="140" cy="35" r="20"
          fill="#3D3229"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '140px 50px' }}
        />

        {/* Left Eye Patch */}
        <ellipse cx="75" cy="70" rx="18" ry="15" fill="#3D3229" />
        
        {/* Right Eye Patch */}
        <ellipse cx="125" cy="70" rx="18" ry="15" fill="#3D3229" />

        {/* Left Eye */}
        <motion.g>
          <circle cx="75" cy="70" r="8" fill="#FAF7F2" />
          <motion.circle
            cx="77" cy="70" r="4" fill="#3D3229"
            animate={{ scale: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.5, 1] }}
          />
          <circle cx="79" cy="68" r="1.5" fill="#FAF7F2" />
        </motion.g>

        {/* Right Eye */}
        <motion.g>
          <circle cx="125" cy="70" r="8" fill="#FAF7F2" />
          <motion.circle
            cx="127" cy="70" r="4" fill="#3D3229"
            animate={{ scale: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.5, 1] }}
          />
          <circle cx="129" cy="68" r="1.5" fill="#FAF7F2" />
        </motion.g>

        {/* Nose */}
        <ellipse cx="100" cy="85" rx="8" ry="5" fill="#3D3229" />

        {/* Mouth - Smile */}
        <motion.path
          d="M 90 95 Q 100 105 110 95"
          fill="none"
          stroke="#3D3229"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ d: ["M 90 95 Q 100 105 110 95", "M 90 95 Q 100 108 110 95", "M 90 95 Q 100 105 110 95"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cheeks */}
        <motion.circle
          cx="60" cy="85" r="8" fill="#E8B4A0" opacity="0.5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="140" cy="85" r="8" fill="#E8B4A0" opacity="0.5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Feet */}
        <ellipse cx="75" cy="175" rx="20" ry="12" fill="#3D3229" />
        <ellipse cx="125" cy="175" rx="20" ry="12" fill="#3D3229" />
      </motion.svg>

      {/* FRESHOZZ Text */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-2xl font-display font-bold text-warm tracking-tight">FRESHOZZ</p>
        <p className="text-[8px] text-copper/60 tracking-[0.15em] uppercase">Sip the Freshness</p>
      </motion.div>
    </div>
  );
}
