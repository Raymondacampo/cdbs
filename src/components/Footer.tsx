import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#13292A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="font-[Quicksand,sans-serif] font-bold text-lg text-[#E996B4]">
            Belkis Sandoval Centro de Danza
          </p>
          <p className="mt-2 text-sm text-white/70">
            Bailar puede cambiar tu vida, ¡descúbrelo!
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-semibold mb-3 text-[#F2C9D8]">Páginas</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-[#E996B4] transition-colors">Home</Link></li>
            <li><Link href="/ballet" className="hover:text-[#E996B4] transition-colors">Ballet</Link></li>
            <li><Link href="/hiphop-jazz" className="hover:text-[#E996B4] transition-colors">Hip-Hop & Jazz</Link></li>
            <li><Link href="/others" className="hover:text-[#E996B4] transition-colors">Otros</Link></li>
            <li><Link href="/about-us" className="hover:text-[#E996B4] transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/recital" className="hover:text-[#E996B4] transition-colors">Recital</Link></li>
          </ul>
        </div>

        {/* Contact placeholder */}
        <div>
          <p className="font-semibold mb-3 text-[#F2C9D8]">Contacto</p>
          <p className="text-sm text-white/70">
            {/* TODO: add contact info */}
            Sandovaldanza@gmail.com
          </p>
          <div className="mt-2 text-sm text-white/70">
            Teléfono: 809 547 1394
          </div>
          <div className="mt-2 text-sm text-white/70">
            Móvil: 829 573 2241
          </div>
          <div className="mt-2 text-sm text-white/70">
            Av. Dr. Fernando Alberto Defilló 375, Santo Domingo
          </div>
          <div className="flex space-x-4 mt-2">
            <Link
              href="https://www.facebook.com/centrodedanzabelkisandoval"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#E996B4] transition-colors"
            >
              <FaFacebook aria-hidden="true" size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/belkissandovalcentrodedanza/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#E996B4] transition-colors"
            >
              <FaInstagram aria-hidden="true" size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Belkis Sandoval Centro de Danza. Todos los derechos reservados.
      </div>
    </footer>
  );
}
