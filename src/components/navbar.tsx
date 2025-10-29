import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    // { href: "#realidad", label: "Problematica" },
    { href: "#sobre", label: "Quiénes Somos" },
    // { href: "#reconocimientos", label: "Reconocimientos" },
    { href: "#equipo", label: "Equipo" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {/* <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#7459a9" }}>
              <span className="text-white font-bold text-lg">E</span>
            </div> */}
            <span className="font-semibold text-lg text-gray-900 hidden sm:inline">Emilia</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#7459a9] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="px-6 py-2 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              style={{ backgroundColor: "#7459a9" }}
            >
              Comenzar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#7459a9] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="px-4 py-2 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all text-center"
                style={{ backgroundColor: "#7459a9" }}
                onClick={() => setIsOpen(false)}
              >
                Comenzar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}