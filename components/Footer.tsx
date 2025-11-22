import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-premium-black to-bg-dark border-t border-copper/10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-bold text-copper mb-4 tracking-tight">
              FRESHOZZ
            </h3>
            <p className="text-warm/60 text-sm font-body leading-relaxed max-w-md">
              A new category.<br />
              Not to compete. To replace.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-warm/40 font-display text-xs tracking-[0.3em] uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm/70 hover:text-copper transition-colors text-sm font-body"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@freshozz.in" 
                  className="text-warm/70 hover:text-copper transition-colors text-sm font-body"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-warm/40 font-display text-xs tracking-[0.3em] uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-warm/70 hover:text-copper transition-colors text-sm font-body">Contact</Link></li>
              <li><Link href="/legal/privacy" className="text-warm/70 hover:text-copper transition-colors text-sm font-body">Privacy</Link></li>
              <li><Link href="/legal/terms" className="text-warm/70 hover:text-copper transition-colors text-sm font-body">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-copper/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm/40 text-xs font-body tracking-wider">
              © {new Date().getFullYear()} Freshozz. All rights reserved.
            </p>
            <p className="text-copper/30 text-xs font-display italic tracking-wide">
              Taste the Threshold
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
