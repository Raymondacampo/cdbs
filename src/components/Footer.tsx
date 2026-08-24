import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#13292A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="font-[Quicksand,sans-serif] font-bold text-lg text-[#E996B4]">
            CDBS Dance Studio
          </p>
          <p className="mt-2 text-sm text-white/70">
            Passion for dance, excellence in motion.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-semibold mb-3 text-[#F2C9D8]">Pages</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-[#E996B4] transition-colors">Home</Link></li>
            <li><Link href="/ballet" className="hover:text-[#E996B4] transition-colors">Ballet</Link></li>
            <li><Link href="/hiphop-jazz" className="hover:text-[#E996B4] transition-colors">Hip-Hop & Jazz</Link></li>
            <li><Link href="/others" className="hover:text-[#E996B4] transition-colors">Others</Link></li>
            <li><Link href="/about-us" className="hover:text-[#E996B4] transition-colors">About Us</Link></li>
            <li><Link href="/recital" className="hover:text-[#E996B4] transition-colors">Recital</Link></li>
          </ul>
        </div>

        {/* Contact placeholder */}
        <div>
          <p className="font-semibold mb-3 text-[#F2C9D8]">Contact</p>
          <p className="text-sm text-white/70">
            {/* TODO: add contact info */}
            your@email.com
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} CDBS Dance Studio. All rights reserved.
      </div>
    </footer>
  );
}
