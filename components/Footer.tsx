import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-copper/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">FRESHOZZ</h3>
            <p className="text-muted-warm text-sm">
              Masala Cola
              <br />
              Sip the Freshness
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

          {/* Contact */}
          <div>
            <h4 className="text-warm font-display font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:harsh@freshozz.com" className="text-muted-warm hover:text-gold transition-colors text-sm">harsh@freshozz.com</a></li>
              <li><span className="text-muted-warm text-sm">+91-[phone]</span></li>
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
