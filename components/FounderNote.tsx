import { motion } from 'framer-motion';

export default function FounderNote() {
  return (
    <div className="bg-black py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-mint/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-mint/40" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-white/40">A Note From The Founders</span>
              <div className="h-[1px] w-12 bg-mint/40" />
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16"
          >
            {/* Quote */}
            <div className="mb-12">
              <div className="text-9xl font-serif text-mint/20 leading-none mb-8">"</div>
              
              <div className="space-y-6 text-white/80 text-lg md:text-2xl font-light leading-relaxed">
                <p>
                  <span className="text-mint">We started Freshozz</span> with a simple belief: India deserves beverages that celebrate our bold flavors without compromising on health or premium quality.
                </p>
                
                <p>
                  Every bottle represents our commitment to <span className="text-white font-normal">zero preservatives, zero sugar calories, and 100% authentic taste.</span>
                </p>

                <p className="text-white/60 italic">
                  This isn't just a drink. It's a movement to redefine what "Made in India" means to the world.
                </p>
              </div>

              <div className="text-9xl font-serif text-mint/20 leading-none text-right -mb-4">"</div>
            </div>

            {/* Signature section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-white text-xl font-display mb-1">The Freshozz Team</div>
                <div className="text-white/40 text-sm tracking-wide">Founders & Innovators</div>
              </div>

              {/* Handwritten signature effect */}
              <motion.div
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.8 }}
                className="text-mint/60 text-4xl font-serif italic"
              >
                Freshozz
              </motion.div>
            </motion.div>

            {/* Founding date */}
            <div className="text-center mt-12">
              <div className="inline-block px-6 py-2 bg-mint/10 border border-mint/20 rounded-full text-mint/60 text-xs tracking-[0.3em] uppercase">
                Est. 2024
              </div>
            </div>
          </motion.div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-white/40 text-sm tracking-wide">
              Join us on this journey to make refreshment revolutionary.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
