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
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand-border shadow-xs py-3'
            : 'bg-ivory/80 backdrop-blur-xs border-b border-sand-border/50 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <a
            href="#hero"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass p-1 -m-1"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight text-charcoal-teal uppercase">
                HEAVEN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brass uppercase font-semibold border-l border-sand-dark pl-2">
                STUDIO
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-brown-muted -mt-0.5 font-medium">
              FURNITURE MART • CHATTOGRAM
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-widest text-charcoal-brown hover:text-charcoal-teal font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-brass hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Conversion CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-charcoal-teal hover:text-brass transition-colors px-3 py-2"
              title="Call Agrabad Showroom"
            >
              <Phone className="w-3.5 h-3.5 text-brass" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              href="#quote"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="p-2 text-charcoal-teal hover:text-brass transition-colors"
              aria-label="Call studio"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-teal hover:text-brass focus:outline-none focus-visible:ring-2 focus-visible:ring-brass cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-teal uppercase tracking-tight">
                    HEAVEN FURNITURE
                  </h3>
                  <p className="text-[10px] text-brass uppercase tracking-widest font-semibold">
                    Bespoke Interior Studio
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal-brown hover:text-charcoal-teal"
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
