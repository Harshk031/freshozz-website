import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { href: '/', label: 'Home', isExternal: false, isSpecial: false },
    { href: '#waitlist', label: 'Join Waitlist', isExternal: false, isSpecial: true },
    { href: 'https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4', label: 'Instagram', isExternal: true, isSpecial: false },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-bg-cream/98 backdrop-blur-xl border-b border-copper/20 shadow-soft-cream' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-700 ${
          scrolled ? 'py-4' : 'py-6'
        }`}>
          {/* Text Logo - Clean & Premium */}
          <Link href="/" className="flex items-center group relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className={`font-display font-bold tracking-tight transition-all duration-500 ${
                scrolled ? 'text-2xl' : 'text-3xl'
              } text-warm group-hover:text-copper`}>
                FRESHOZZ
              </span>
              <span className={`block text-[8px] tracking-[0.25em] uppercase transition-all duration-500 ${
                scrolled ? 'opacity-0 h-0' : 'opacity-60 text-copper/60'
              }`}>
                Born Refreshing
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Premium Minimal */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const Component = link.isExternal ? 'a' : Link;
              const extraProps = link.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
              
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  {...extraProps}
                  className={`transition-all duration-700 font-display text-sm tracking-[0.15em] uppercase relative group ${
                    link.isSpecial
                      ? 'text-bg-cream px-6 py-3 bg-gradient-to-r from-copper to-mint border border-copper/20 rounded-full hover:shadow-[0_0_20px_rgba(100,180,140,0.4)]'
                      : scrolled ? 'text-warm/80' : 'text-warm'
                  } ${!link.isSpecial && 'hover:text-copper'}`}
                >
                  <span className="relative z-10">
                    {link.label}
                    {link.isSpecial && (
                      <motion.span
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-1 -right-1 w-2 h-2 bg-mint rounded-full shadow-[0_0_8px_rgba(100,180,140,0.8)]"
                      />
                    )}
                  </span>
                  
                  {!link.isSpecial && (
                    <motion.span 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-copper rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                </Component>
              );
            })}
          </div>

          {/* Mobile Menu Button - Premium */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-warm hover:text-copper transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden bg-bg-cream/98 backdrop-blur-xl border-b border-copper/20 shadow-soft-cream"
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((item, index) => {
              const Component = item.isExternal ? 'a' : Link;
              const extraProps = item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Component
                    href={item.href}
                    {...extraProps}
                    onClick={() => setIsOpen(false)}
                    className={`block transition-all duration-500 font-display text-lg tracking-[0.15em] uppercase py-3 relative ${
                      item.isSpecial
                        ? 'text-bg-cream px-6 bg-gradient-to-r from-copper to-mint border border-copper/20 rounded-lg shadow-[0_0_15px_rgba(100,180,140,0.3)]'
                        : 'text-warm/80 hover:text-copper py-2'
                    }`}
                  >
                    {item.label}
                    {item.isSpecial && (
                      <motion.span
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-2 right-2 w-2 h-2 bg-mint rounded-full shadow-[0_0_8px_rgba(100,180,140,0.8)]"
                      />
                    )}
                  </Component>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
