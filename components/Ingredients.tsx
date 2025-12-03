import { motion } from 'framer-motion';

const ingredients = [
  {
    name: 'Mint Extract',
    description: 'Fresh mentha leaves for cooling sensation',
    benefit: 'Natural refreshment',
    icon: '🌿',
    color: 'mint'
  },
  {
    name: 'Lime Juice',
    description: 'Tangy citrus from real limes',
    benefit: 'Vitamin C boost',
    icon: '🍋',
    color: 'copper'
  },
  {
    name: 'Indian Spices',
    description: 'Cumin, black salt, and secret blend',
    benefit: 'Digestive aid',
    icon: '🌶️',
    color: 'warm'
  },
  {
    name: 'Stevia',
    description: 'Natural plant-based sweetener',
    benefit: 'Zero calories',
    icon: '🍃',
    color: 'mint'
  },
  {
    name: 'Carbonated Water',
    description: 'High fizz for maximum crispness',
    benefit: 'Hydration',
    icon: '💧',
    color: 'copper'
  },
  {
    name: 'Natural Flavors',
    description: 'No artificial additives',
    benefit: 'Pure taste',
    icon: '✨',
    color: 'warm'
  }
];

export default function Ingredients() {
  return (
    <div className="bg-black py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
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
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40">What's Inside</span>
            <div className="h-[1px] w-12 bg-mint/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-thin text-white tracking-tight mb-6">
            Pure <span className="text-mint">Ingredients</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We believe in transparency. Every ingredient is carefully selected for maximum flavor and zero compromise.
          </p>
        </motion.div>

        {/* Ingredients grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-mint/30 transition-all duration-500">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl mb-6"
                >
                  {ingredient.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-2xl font-display font-light text-white mb-2 group-hover:text-mint transition-colors">
                  {ingredient.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {ingredient.description}
                </p>

                {/* Benefit badge */}
                <div className="inline-block px-3 py-1 bg-mint/10 border border-mint/20 rounded-full text-mint text-xs tracking-wide">
                  {ingredient.benefit}
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="h-[1px] bg-white/10 mt-6 origin-left"
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
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-mint/10 via-transparent to-copper/10 border border-white/10 rounded-2xl">
            <p className="text-white text-lg font-light">
              <span className="text-mint">100% Natural.</span> <span className="text-white/60">0% Artificial.</span> <span className="text-copper">100% Delicious.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
