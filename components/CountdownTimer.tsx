import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Set launch date - adjust this to your actual launch date
    const launchDate = new Date('2025-01-01T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-4 sm:gap-8 justify-center flex-wrap">
        {[{ label: 'Days', value: 0 }, { label: 'Hours', value: 0 }, { label: 'Minutes', value: 0 }, { label: 'Seconds', value: 0 }].map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-gradient-to-br from-gold/20 to-copper/20 backdrop-blur-md border border-gold/30 rounded-lg p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] shadow-lg">
              <div className="text-4xl sm:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold to-copper">
                00
              </div>
              <div className="text-warm/70 text-sm sm:text-base font-body mt-2 tracking-wider uppercase">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex gap-4 sm:gap-8 justify-center flex-wrap">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            key={unit.value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gold/20 to-copper/20 backdrop-blur-md border border-gold/30 rounded-lg p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] shadow-lg">
              <div className="text-4xl sm:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold to-copper">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-warm/70 text-sm sm:text-base font-body mt-2 tracking-wider uppercase">
                {unit.label}
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-copper/10 rounded-lg blur-xl -z-10" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
