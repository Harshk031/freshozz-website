import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'What exactly is Freshozz?',
    answer: 'Freshozz is India\'s first premium masala-mojito fusion soda. We combine the refreshing coolness of mojito (mint + lime) with traditional Indian masala spices, creating a unique flavor profile that\'s both familiar and revolutionary. Zero preservatives, zero sugar calories, 100% flavor.'
  },
  {
    question: 'Is it really zero sugar calories?',
    answer: 'Yes! We use natural stevia extract as our sweetener, which provides sweetness without any sugar calories. You get all the taste, none of the guilt. Perfect for health-conscious consumers who don\'t want to compromise on flavor.'
  },
  {
    question: 'What makes it "premium"?',
    answer: 'Premium means no compromise: real ingredients (not artificial flavors), zero preservatives, sophisticated flavor profile, and international-quality packaging. We\'re competing with global beverage brands, not local sodas.'
  },
  {
    question: 'When and where can I buy it?',
    answer: 'Launching January 15, 2026. Initially available through our website and select premium retailers. Join our waitlist on Instagram @fresh_ozz19 for early access and exclusive launch offers.'
  },
  {
    question: 'How is it different from regular masala soda?',
    answer: 'Traditional masala sodas are street-style drinks with basic ingredients. Freshozz elevates this with premium natural ingredients, zero preservatives, refined flavor balance, and sophisticated packaging. Think craft soda meets Indian heritage.'
  },
  {
    question: 'What\'s the price per bottle?',
    answer: '₹35 per 200ml bottle. Premium ingredients and quality come at a fair price. We\'re positioned as a premium refreshment, not a budget drink.'
  },
  {
    question: 'Is it suitable for daily consumption?',
    answer: 'Absolutely! With zero sugar calories, no preservatives, and natural ingredients, Freshozz is a healthier alternative to regular sodas. Enjoy it as a daily refreshment or special occasion drink.'
  },
  {
    question: 'Can I become a distributor or stockist?',
    answer: 'We\'re building our distribution network. For wholesale/retail inquiries, email us at hello@freshozz.in with your business details.'
  },
  {
    question: 'What\'s the carbonation level?',
    answer: 'High fizz! We engineer our carbonation levels for maximum crispness and that signature "crack" when you open the bottle. It\'s refreshing and lively.'
  },
  {
    question: 'Is it vegetarian/vegan?',
    answer: 'Yes, 100% vegetarian and vegan-friendly. All our ingredients are plant-based.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-black py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-mint/10 via-transparent to-transparent blur-3xl" />
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
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40">Got Questions?</span>
            <div className="h-[1px] w-12 bg-mint/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-thin text-white tracking-tight">
            Frequently <span className="text-mint">Asked</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-mint/30 transition-all duration-500">
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between group"
                >
                  <h3 className="text-xl font-display font-light text-white group-hover:text-mint transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-mint text-2xl"
                  >
                    +
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <div className="h-[1px] bg-white/10 mb-4" />
                        <p className="text-white/70 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Still have questions? We'd love to help.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:hello@freshozz.in"
              className="text-mint hover:text-white transition-colors text-sm tracking-wide underline underline-offset-4"
            >
              hello@freshozz.in
            </a>
            <span className="text-white/20">or</span>
            <a
              href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint hover:text-white transition-colors text-sm tracking-wide underline underline-offset-4"
            >
              DM us on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
