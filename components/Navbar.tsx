import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from 'next/image';

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
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/about', label: 'About' },
    { href: '/how', label: 'How It\'s Made' },
    { href: '/where-to-buy', label: 'Where to Buy' },
    { href: '/contact', label: 'Contact' },
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
          scrolled ? 'py-4' : 'py-8'
        }`}>
          {/* Logo - Premium & Prominent */}
          <Link href="/" className="flex items-center group relative">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-copper/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              
              <Image
                src="/logo.png"
                alt="Freshozz premium flavoured soda India logo with copper design"
                width={200}
                height={100}
                className={`transition-all duration-700 ${scrolled ? 'h-14' : 'h-24'} w-auto`}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Premium Minimal */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isProduct = link.href === '/product';
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-700 font-display text-sm tracking-[0.15em] uppercase relative group ${
                    isProduct
                      ? 'text-bg-cream px-6 py-3 bg-gradient-to-r from-copper to-earth border border-copper rounded-lg hover:from-earth hover:to-copper hover:shadow-[0_0_20px_rgba(156,123,92,0.4)]'
                      : scrolled ? 'text-warm/80' : 'text-warm'
                  } ${!isProduct && 'hover:text-copper'}`}
                >
                  <span className="relative z-10">
                    {link.label}
                    {/* Special badge for Product */}
                    {isProduct && (
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
                        className="absolute -top-1 -right-1 w-2 h-2 bg-copper rounded-full shadow-[0_0_8px_rgba(184,107,44,0.8)]"
                      />
                    )}
                  </span>
                  
                  {/* Regular dot indicator for non-product links */}
                  {!isProduct && (
                    <motion.span 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-copper rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}

                  {/* Glowing background for Product */}
                  {isProduct && (
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-copper/10 to-gold/10 rounded-lg blur-sm -z-10"
                    />
                  )}
                </Link>
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
              const isProduct = item.href === '/product';
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block transition-all duration-500 font-display text-lg tracking-[0.15em] uppercase py-3 relative ${
                      isProduct
                        ? 'text-bg-cream px-6 bg-gradient-to-r from-copper to-earth border border-copper rounded-lg shadow-[0_0_15px_rgba(156,123,92,0.3)]'
                        : 'text-warm/80 hover:text-copper py-2'
                    }`}
                  >
                    {item.label}
                    {/* Glowing badge for mobile Product */}
                    {isProduct && (
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
                        className="absolute top-2 right-2 w-2 h-2 bg-copper rounded-full shadow-[0_0_8px_rgba(184,107,44,0.8)]"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
