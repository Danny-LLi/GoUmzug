import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import GoUmzugLogo from '/src/assets/57ijwef8234gt834bgg.png'; // Import the logo


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Pakete', href: '/packages' },
    { name: 'Warum GoUmzug?', href: '/why-us' },
    { name: 'Kontakt', href: '/contact' },
  ];


  const isActive = (path) => location.pathname === path;


  return (
    <>
      <Helmet>
  {/* SEO Meta Tags */}
  <title>GoUmzug - Ihr Umzugspartner</title> {/* */}
  <meta 
    name="description" 
    content="GoUmzug bietet professionelle Umzugsdienstleistungen aus München. Wir kümmern uns um Ihren Umzug – schnell, zuverlässig und günstig." 
  /> {/* */}
  <meta 
    name="keywords" 
    content="GoUmzug, Umzug, Umzugspartner, München, Umzugsdienstleistungen" 
  />
  <link rel="canonical" href="https://goumzug.eu/" />

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goumzug.eu/" />
  <meta property="og:title" content="GoUmzug - Ihr Umzugspartner" /> {/* */}
  <meta 
    property="og:description" 
    content="GoUmzug bietet professionelle Umzugsdienstleistungen aus München. Wir kümmern uns um Ihren Umzug – schnell, zuverlässig und günstig." 
  /> {/* */}
  <meta property="og:site_name" content="GoUmzug" /> {/* */}
  <meta property="og:locale" content="de_DE" />
  {/* TODO: Replace with a direct URL to a high-quality image for social sharing (e.g., https://goumzug.eu/social-default.jpg) */}
  <meta property="og:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="GoUmzug - Ihr Umzugspartner" /> {/* */}
  <meta 
    name="twitter:description" 
    content="GoUmzug bietet professionelle Umzugsdienstleistungen aus München. Wir kümmern uns um Ihren Umzug – schnell, zuverlässig und günstig." 
  /> {/* */}
  {/* TODO: Replace with the same image URL used for og:image */}
  <meta name="twitter:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />
</Helmet>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-goumzug-blue text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+49 15 256 136 380</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@goumzug.eu</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Kurzfristige Termine möglich!</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={GoUmzugLogo} alt="GoUmzug Logo" className="h-11 mr-8" />
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-goumzug-blue">
                  GoUmzug
                </div>
                <div className="text-sm text-goumzug-orange font-medium">
                  Ihr Umzug, unser Job!
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-goumzug-blue transition-colors duration-200 font-medium ${
                    isActive(item.href) ? 'text-goumzug-blue border-b-2 border-goumzug-blue' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                asChild
                className="bg-goumzug-success hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                <Link to="/contact">Kostenloses Angebot</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-goumzug-blue"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-700 hover:text-goumzug-blue transition-colors duration-200 font-medium ${
                      isActive(item.href) ? 'text-goumzug-blue' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  asChild
                  className="bg-goumzug-success hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-fit"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Kostenloses Angebot
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};


export default Header;
