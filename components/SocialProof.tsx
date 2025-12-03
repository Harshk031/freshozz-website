import { motion } from 'framer-motion';

export default function SocialProof() {
  return (
    <div className="bg-cream py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-copper rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-copper/40" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-muted-warm">Join The Movement</span>
            <div className="h-[1px] w-12 bg-copper/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-thin text-warm tracking-tight mb-6">
            Follow Our <span className="font-normal text-copper">Journey</span>
          </h2>
          <p className="text-muted-warm text-lg max-w-2xl mx-auto">
            Be part of the Freshozz family. Get exclusive updates, behind-the-scenes content, and early access offers.
          </p>
        </motion.div>

        {/* Instagram showcase */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/80 backdrop-blur-sm border border-copper/10 rounded-3xl p-12 md:p-16 shadow-soft-gold"
          >
            {/* Instagram header */}
            <div className="flex items-center justify-between mb-12 pb-8 border-b border-copper/10">
              <div className="flex items-center gap-4">
                {/* Profile pic placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-copper via-mint to-copper rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  F
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-display text-warm">@fresh_ozz19</h3>
                    <div className="text-mint">✓</div>
                  </div>
                  <p className="text-muted-warm text-sm">Premium Masala Mojito Soda</p>
                </div>
              </div>

              {/* Instagram icon */}
              <div className="hidden md:block">
                <svg className="w-12 h-12 text-copper/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            {/* Grid preview placeholder */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square bg-gradient-to-br from-copper/10 via-mint/10 to-copper/10 rounded-xl flex items-center justify-center text-4xl hover:scale-105 transition-transform cursor-pointer"
                >
                  {['🥤', '🌿', '🔥', '✨', '💚', '🚀'][i - 1]}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <a
                href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-copper to-mint text-white font-display text-sm tracking-wide rounded-full hover:shadow-2xl hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow on Instagram</span>
                <span className="text-white/60">•</span>
                <span className="text-white/80 text-xs">Exclusive Updates</span>
              </a>

              <p className="text-muted-warm/60 text-xs tracking-wide mt-6">
                Join 1000+ followers staying updated on our launch
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
