import React from 'react'
import { MapPin, Clock, ArrowUp, MessageSquare } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { footerQuickLinks } from '../../data/navigation'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal-deep text-ivory relative border-t border-charcoal-border overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-charcoal-border">
          {/* Brand Identity & Founder Quote Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ivory uppercase">
                HEAVEN
              </span>
              <span className="text-xs tracking-[0.25em] text-brass uppercase font-semibold border-l border-charcoal-border pl-2">
                STUDIO
              </span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brass font-semibold">
              FURNITURE MART • CHATTOGRAM
            </p>

            <blockquote className="text-sm text-ivory/80 italic leading-relaxed border-l-2 border-brass/80 pl-3 pt-0.5">
              "{siteConfig.founder.quote}"
              <span className="block not-italic text-xs sm:text-sm font-semibold text-brass mt-1.5">
                — {siteConfig.founder.name}, {siteConfig.founder.title}
              </span>
            </blockquote>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Heaven Furniture Mart on Facebook"
                className="w-9 h-9 rounded-none bg-charcoal-surface border border-charcoal-border flex items-center justify-center text-ivory/80 hover:text-brass hover:border-brass transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Heaven Furniture Mart on Instagram"
                className="w-9 h-9 rounded-none bg-charcoal-surface border border-charcoal-border flex items-center justify-center text-ivory/80 hover:text-brass hover:border-brass transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Heaven Furniture Mart on YouTube"
                className="w-9 h-9 rounded-none bg-charcoal-surface border border-charcoal-border flex items-center justify-center text-ivory/80 hover:text-brass hover:border-brass transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Heaven Furniture Mart on WhatsApp"
                className="w-9 h-9 rounded-none bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Collection Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-brass">
              Curated Collections
            </h4>
            <ul className="space-y-3">
              {footerQuickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/80 hover:text-brass transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brass/70 rounded-full" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom Location Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-brass">
              Agrabad Showroom
            </h4>
            <div className="space-y-3.5 text-sm text-ivory/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brass shrink-0 mt-1" />
                <div>
                  <p className="text-ivory font-semibold text-base">Opposite of RAK Ceramics</p>
                  <p className="text-ivory/75">Agrabad Access Road, Chattogram, Bangladesh</p>
                  <a
                    href={siteConfig.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brass hover:underline inline-block mt-1 text-xs sm:text-sm font-medium"
                  >
                    Get Directions on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brass shrink-0 mt-1" />
                <div>
                  <p className="text-ivory font-medium">{siteConfig.showroomHours.days}</p>
                  <p className="text-xs sm:text-sm text-ivory/70">{siteConfig.showroomHours.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Inquiries & Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-brass">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-ivory/80">
              <div>
                <span className="text-xs text-ivory/60 uppercase tracking-wider block font-medium">Phone & WhatsApp</span>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-ivory font-semibold hover:text-brass transition-colors block mt-0.5"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-xs text-ivory/60 uppercase tracking-wider block font-medium">Email Inquiries</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-ivory font-semibold hover:text-brass transition-colors block mt-0.5 break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="#quote"
                  className="inline-block text-xs sm:text-sm uppercase tracking-wider text-charcoal-teal bg-brass hover:bg-brass-light font-bold px-3.5 py-2 transition-colors"
                >
                  Start Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-ivory/60">
          <p>© {new Date().getFullYear()} Heaven Furniture Mart. All rights reserved. Designed & Crafted in Chattogram, Bangladesh.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-ivory/80 hover:text-brass transition-colors cursor-pointer font-medium"
            aria-label="Back to top"
          >
            <span>Return to top</span>
            <ArrowUp className="w-4 h-4 text-brass" />
          </button>
        </div>
      </div>
    </footer>
  )
}
