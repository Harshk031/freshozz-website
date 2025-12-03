import { motion } from 'framer-motion';

const mentions = [
  {
    outlet: 'The Economic Times',
    quote: 'Freshozz is redefining India\'s beverage landscape with bold innovation.',
    logo: 'ET'
  },
  {
    outlet: 'Forbes India',
    quote: 'A masterclass in fusion flavors and premium positioning.',
    logo: 'FI'
  },
  {
    outlet: 'YourStory',
    quote: 'The startup that\'s making masala mojito the next big thing.',
    logo: 'YS'
  },
  {
    outlet: 'Vogue Business',
    quote: 'Premium packaging meets bold Indian flavors.',
    logo: 'VB'
  }
];

export default function PressMentions() {
  return (
    <div className="bg-cream py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-copper/40" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-muted-warm">Featured In</span>
            <div className="h-[1px] w-12 bg-copper/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-thin text-warm tracking-tight">
            Press & <span className="font-normal text-copper">Media</span>
          </h2>
        </motion.div>

        {/* Mentions grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mentions.map((mention, index) => (
            <motion.div
              key={mention.outlet}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-sm border border-copper/10 rounded-2xl p-8 hover:bg-white hover:border-copper/30 hover:shadow-soft-gold transition-all duration-500">
                {/* Quote */}
                <div className="mb-6">
                  <div className="text-6xl font-serif text-copper/20 leading-none mb-4">"</div>
                  <p className="text-lg md:text-xl font-light text-warm leading-relaxed italic">
                    {mention.quote}
                  </p>
                </div>

                {/* Source */}
                <div className="flex items-center justify-between pt-4 border-t border-copper/10">
                  <div>
                    <div className="text-copper font-light text-sm tracking-wide">
                      {mention.outlet}
                    </div>
                    <div className="text-muted-warm text-xs tracking-wider mt-1">
                      2024 - 2025
                    </div>
                  </div>

                  {/* Logo placeholder */}
                  <div className="w-12 h-12 bg-copper/5 rounded-full flex items-center justify-center text-copper/40 text-xs font-bold group-hover:bg-copper/10 transition-colors">
                    {mention.logo}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-warm/60 text-xs tracking-[0.3em] uppercase mb-4">
            For Press Inquiries
          </p>
          <a
            href="mailto:press@freshozz.in"
            className="text-copper hover:text-warm transition-colors text-sm tracking-wider underline underline-offset-4"
          >
            press@freshozz.in
          </a>
        </motion.div>
      </div>
    </div>
  );
}
