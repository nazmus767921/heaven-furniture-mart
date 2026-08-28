import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageSquare, MapPin, Clock, ArrowRight } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { navigationItems } from '../../data/navigation'
import { Button } from '../ui/Button'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand-border shadow-xs text-charcoal-brown'
            : 'bg-charcoal-deep/80 backdrop-blur-md border-b border-white/10 text-ivory'
        }`}
      >
        {/* Main Brand & Actions Bar */}
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3 flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <a
            href="#hero"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass py-1"
            aria-label="Heaven Furniture Mart"
          >
            <img
              src={isScrolled ? '/images/logo-dark.webp' : '/images/logo-white.webp'}
              alt="Heaven Furniture Mart"
              width={180}
              height={56}
              className="h-9 sm:h-11 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Right CTAs & Contact */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className={`flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider transition-colors px-3 py-1.5 ${
                isScrolled
                  ? 'text-charcoal-teal hover:text-brass'
                  : 'text-ivory hover:text-brass-accent'
              }`}
              title="Call Agrabad Showroom"
            >
              <Phone className="w-3.5 h-3.5 text-brass" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <Button
              variant={isScrolled ? 'primary' : 'brass'}
              size="sm"
              href="#quote"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-charcoal-teal hover:text-brass' : 'text-ivory hover:text-brass-accent'
              }`}
              aria-label="Call studio"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass cursor-pointer transition-colors ${
                isScrolled ? 'text-charcoal-teal hover:text-brass' : 'text-ivory hover:text-brass-accent'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Thin Secondary Navigation Bar (Dedicated Specifically to Navigation Menu Links) */}
        <div
          className={`border-t transition-colors ${
            isScrolled
              ? 'border-sand-border/80 bg-sand/35'
              : 'border-white/10 bg-black/25'
          }`}
        >
          <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <nav
              className="flex items-center justify-center gap-6 sm:gap-10 overflow-x-auto py-2 no-scrollbar"
              aria-label="Main Navigation"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.18em] font-semibold whitespace-nowrap transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-brass hover:after:w-full after:transition-all after:duration-200 ${
                    isScrolled
                      ? 'text-charcoal-brown hover:text-charcoal-teal'
                      : 'text-ivory/85 hover:text-brass-accent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-charcoal-deep/60 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-ivory shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-sand-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-sand-border">
                <a href="#hero" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src="/images/logo-dark.webp"
                    alt="Heaven Furniture Mart"
                    width={150}
                    height={47}
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal-brown hover:text-charcoal-teal cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-4" aria-label="Mobile Navigation">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm uppercase tracking-widest text-charcoal-brown hover:text-charcoal-teal hover:translate-x-1 transition-all py-1.5 font-medium border-b border-sand-border/40"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Studio Info Quick Card */}
              <div className="bg-sand/60 p-4 border border-sand-border space-y-3 mb-4">
                <div className="flex items-start gap-2.5 text-xs text-charcoal-brown">
                  <MapPin className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-charcoal-teal">Agrabad Showroom:</span>
                    <span>Opposite RAK Ceramics, Agrabad Access Road, Chattogram</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-charcoal-brown">
                  <Clock className="w-4 h-4 text-brass shrink-0" />
                  <span>Sat – Thu: 10:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 border-t border-sand-border space-y-2.5">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Request a Quote
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                className="w-full"
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
