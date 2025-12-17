import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.programs'), href: '#programs' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.getInvolved'), href: '#get-involved' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(newLang)
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-colors">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-32 h-28">
                 <span className="w-5 h-10">
              <img
                    src="logo 1.png"
                    alt="logo"
                    className="w-full h- object-cover"
                  />
                  </span> 
            </div>
         
              
            
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
