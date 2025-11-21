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
          ? 'bg-premium-black/98 backdrop-blur-xl border-b border-copper/20' 
          : 'bg-premium-black/80 backdrop-blur-lg border-b border-copper/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
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
                alt="Freshozz"
                width={180}
                height={90}
                className={`transition-all duration-700 ${scrolled ? 'h-16' : 'h-20'} w-auto`}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Premium Minimal */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-warm/70 hover:text-copper transition-all duration-500 font-display text-sm tracking-[0.15em] uppercase relative group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Minimal dot indicator */}
                <motion.span 
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-copper rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Premium */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-warm/70 hover:text-copper transition-colors p-2"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-dark border-t border-copper/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-warm hover:text-gold transition-colors duration-200 py-2 font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
