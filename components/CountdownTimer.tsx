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
    
    // FIXED launch date - January 15, 2025
    const launchDate = new Date('2025-01-15T00:00:00').getTime();

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
      <div className="flex gap-8 sm:gap-16 justify-center">
        {[{ label: 'Days', value: 0 }, { label: 'Hours', value: 0 }, { label: 'Minutes', value: 0 }, { label: 'Seconds', value: 0 }].map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="text-5xl sm:text-7xl font-display font-light text-warm tracking-tight mb-2">
              00
            </div>
            <div className="text-copper/50 text-xs font-body tracking-[0.2em] uppercase">
              {unit.label}
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
    <div className="flex gap-8 sm:gap-16 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            key={unit.value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl sm:text-7xl font-display font-light text-warm tracking-tight mb-2">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-copper/50 text-xs font-body tracking-[0.2em] uppercase">
              {unit.label}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
