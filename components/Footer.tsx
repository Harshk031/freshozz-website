import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-premium-black to-bg-dark border-t border-soft-copper/15 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Signup */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper mb-4">
            Be the First to Experience Freshozz
          </h3>
          <p className="text-warm/70 mb-6 font-body">
            Get exclusive early access and special launch offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-soil/20 border border-gold/30 rounded-full text-warm placeholder:text-warm/40 focus:outline-none focus:border-gold transition-colors font-body"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-gold to-copper text-bg-dark font-display font-bold rounded-full hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-105">
              Notify Me
            </button>
          </div>
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
