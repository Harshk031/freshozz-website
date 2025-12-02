import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cream to-muddy/30 border-t border-earth/20 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-bold text-earth mb-4 tracking-tight">
              FRESHOZZ
            </h3>
            <p className="text-muted-warm text-sm font-body leading-relaxed max-w-md">
              A new category.<br />
              Not to compete. To replace.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-earth/60 font-display text-xs tracking-[0.3em] uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-warm hover:text-copper transition-colors text-sm font-body"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@freshozz.in" 
                  className="text-muted-warm hover:text-copper transition-colors text-sm font-body"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-earth/60 font-display text-xs tracking-[0.3em] uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-muted-warm hover:text-copper transition-colors text-sm font-body">Contact</Link></li>
              <li><Link href="/legal/privacy" className="text-muted-warm hover:text-copper transition-colors text-sm font-body">Privacy</Link></li>
              <li><Link href="/legal/terms" className="text-muted-warm hover:text-copper transition-colors text-sm font-body">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-earth/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-taupe text-xs font-body tracking-wider">
              © {new Date().getFullYear()} Freshozz. All rights reserved.
            </p>
            <p className="text-copper/60 text-xs font-display italic tracking-wide">
              Taste the Threshold
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
