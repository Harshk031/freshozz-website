import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-premium-black to-bg-dark border-t border-soft-copper/15 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Instagram Follow CTA */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-warm mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-warm mb-8 font-body">
            Follow us on Instagram for exclusive sneak peeks, behind-the-scenes, and launch updates
          </p>
          <a 
            href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-copper text-warm font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/90 transition-all duration-500"
          >
            Follow @fresh_ozz19
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              FRESHOZZ
            </h3>
            <p className="text-muted-warm mb-4 font-body italic">
              The Future of Refreshment
            </p>
            <p className="text-muted-warm text-sm font-body">
              Redefining the beverage industry, one sip at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-warm font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/product" className="text-muted-warm hover:text-gold transition-colors text-sm">Product</Link></li>
              <li><Link href="/about" className="text-muted-warm hover:text-gold transition-colors text-sm">About</Link></li>
              <li><Link href="/how" className="text-muted-warm hover:text-gold transition-colors text-sm">How It's Made</Link></li>
              <li><Link href="/where-to-buy" className="text-muted-warm hover:text-gold transition-colors text-sm">Where to Buy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-warm font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-muted-warm hover:text-gold transition-colors text-sm">Contact</Link></li>
              <li><Link href="/legal/privacy" className="text-muted-warm hover:text-gold transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-muted-warm hover:text-gold transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-warm font-display font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-warm hover:text-copper transition-colors text-sm"
                >
                  Instagram @fresh_ozz19
                </a>
              </li>
              <li><a href="mailto:contact@freshozz.in" className="text-muted-warm hover:text-copper transition-colors text-sm">contact@freshozz.in</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-copper/20 text-center">
          <p className="text-muted-warm text-sm">
            © {new Date().getFullYear()} Freshozz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
