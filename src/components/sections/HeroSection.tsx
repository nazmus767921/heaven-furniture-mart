import React from 'react'
import { ArrowRight, MessageSquare, MapPin, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'

interface HeroSectionProps {
  onOpenQuote: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="hero"
      aria-label="Welcome to Heaven Furniture Mart"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-ivory"
    >
      {/* Background architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E7DED0_1px,transparent_1px),linear-gradient(to_bottom,#E7DED0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sand/80 border border-sand-border text-xs uppercase tracking-[0.2em] text-charcoal-brown font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brass" />
              <span>Bespoke Luxury Furniture • Chattogram</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-charcoal-teal leading-[1.08] tracking-tight">
              Furniture, <br className="hidden sm:inline" />
              <span className="italic font-medium">Crafted Around You.</span>
            </h1>

            {/* Sub-headline / Market Positioning */}
            <p className="text-base sm:text-lg text-brown-muted max-w-2xl font-light leading-relaxed">
              Heaven Furniture Mart creates premium luxury and custom bespoke furniture tailored around your space, taste, and lifestyle. Experience true heirloom craftsmanship from our flagship Agrabad studio.
            </p>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2 text-xs text-charcoal-brown font-medium">
                <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                <span>100% Bespoke Sizing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-brown font-medium">
                <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                <span>Seasoned Solid Hardwood</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-brown font-medium">
                <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                <span>White-Glove Installation</span>
              </div>
            </div>

            {/* Primary & Secondary Conversion Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuote}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="shadow-md"
              >
                Request a Consultation
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp Us
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#collections"
              >
                View Collections
              </Button>
            </div>

            {/* Showroom Location Pill */}
            <div className="pt-4 flex items-center gap-2 text-xs text-brown-muted border-t border-sand-border/70">
              <MapPin className="w-4 h-4 text-brass shrink-0" />
              <span>
                Flagship Showroom: <strong>Opposite of RAK Ceramics, Agrabad Access Road</strong>, Chattogram
              </span>
            </div>
          </div>

          {/* Right Photographic Composition Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Highlight Hero Image */}
              <div className="relative overflow-hidden shadow-2xl border border-sand-border/80 bg-charcoal-deep group">
                <img
                  src="/images/luxury-sofa-1.jpg"
                  alt="Heaven Furniture Mart handcrafted royal salon suite with gold carving"
                  fetchPriority="high"
                  className="w-full aspect-4/3 sm:aspect-square object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-brass font-semibold block mb-0.5">
                    Artisanal Highlight
                  </span>
                  <p className="font-serif text-lg text-ivory leading-tight">
                    The Royal Sovereign Salon Suite
                  </p>
                  <p className="text-[11px] text-ivory/70 mt-0.5">
                    Solid Seasoned Mahogany & Hand-Carved Gold Leaf
                  </p>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-charcoal-teal text-ivory p-4 shadow-xl border border-charcoal-border hidden sm:block max-w-[210px]">
                <div className="flex items-center gap-2 text-brass mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Studio Heritage</span>
                </div>
                <p className="text-xs text-ivory/85 leading-snug">
                  Designed & crafted locally in Chattogram since 2020.
                </p>
              </div>

              {/* Secondary Inset Visual Thumbnail */}
              <div className="absolute -top-4 -right-3 sm:-right-5 w-28 sm:w-36 overflow-hidden shadow-xl border-2 border-ivory hidden sm:block">
                <img
                  src="/images/dining-1.jpg"
                  alt="Bespoke Italian marble dining suite"
                  className="w-full aspect-square object-cover"
                />
                <div className="bg-sand p-1.5 text-center">
                  <span className="text-[9px] uppercase tracking-wider text-charcoal-brown font-semibold block">
                    Marble Dining
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
