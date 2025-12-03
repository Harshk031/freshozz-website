import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Innovation Award',
    org: 'India Beverage Council',
    year: '2025',
    icon: '🏆'
  },
  {
    title: 'Best New Product',
    org: 'Food & Beverage Magazine',
    year: '2025',
    icon: '⭐'
  },
  {
    title: 'Sustainability Leader',
    org: 'Green India Initiative',
    year: '2025',
    icon: '🌿'
  },
  {
    title: "Consumer's Choice",
    org: 'National Taste Awards',
    year: '2025',
    icon: '💎'
  }
];

export default function Awards() {
  return (
    <div className="bg-gradient-to-b from-black to-warm/5 py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-copper rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-mint/40" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40">Recognition</span>
            <div className="h-[1px] w-12 bg-mint/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-thin text-white tracking-tight">
            Award Winning
            <br />
            <span className="text-mint">Excellence</span>
          </h2>
        </motion.div>

        {/* Awards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-mint/30 transition-all duration-500 cursor-default">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl mb-6"
                >
                  {award.icon}
                </motion.div>

                {/* Year badge */}
                <div className="inline-block px-3 py-1 bg-mint/20 border border-mint/30 rounded-full text-mint text-[9px] tracking-[0.3em] uppercase mb-4">
                  {award.year}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-light text-white mb-2 group-hover:text-mint transition-colors">
                  {award.title}
                </h3>

                {/* Organization */}
                <p className="text-white/40 text-xs tracking-wide">
                  {award.org}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="h-[1px] bg-gradient-to-r from-mint/20 to-transparent mt-6 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-white/50 text-sm tracking-[0.3em] uppercase">
            More to come in 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
}
