import React, { useState, useEffect } from 'react'
import { ArrowRight, MessageSquare, MapPin, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'

interface HeroSectionProps {
  onOpenQuote: () => void
}

interface HeroSlide {
  image: string
  title: string
  subtitle: string
  category: string
}

const heroSlides: HeroSlide[] = [
  {
    image: '/images/luxury-sofa-1.jpg',
    title: 'The Royal Sovereign Salon Suite',
    subtitle: 'Solid Seasoned Mahogany & Hand-Carved Gold Leaf',
    category: 'Signature Living',
  },
  {
    image: '/images/luxury-living-room-2.jpg',
    title: 'The Sovereign Grand Lounge',
    subtitle: 'Contemporary Luxury & Custom Wood Joinery',
    category: 'Modern Bespoke',
  },
  {
    image: '/images/dining-1.jpg',
    title: 'The Imperial Marquina Suite',
    subtitle: 'Polished Italian Marble & Hand-Sculpted Chairs',
    category: 'Luxury Dining',
  },
  {
    image: '/images/bedroom-1.jpg',
    title: 'The Presidential Master Chamber',
    subtitle: 'Hand-Tufted Velvet & Seasoned Solid Teak',
    category: 'Royal Bedroom',
  },
]

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      id="hero"
      aria-label="Welcome to Heaven Furniture Mart"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-charcoal-deep text-ivory"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Bleed Background Images with Crossfade & Slow Ambient Ken-Burns */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              fetchPriority={index === 0 ? 'high' : 'low'}
              className={`w-full h-full object-cover object-center transition-transform duration-10000 ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Multi-layered cinematic gradient overlays for pristine readability and mood */}
        {/* Left editorial darkening gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/95 via-charcoal-deep/80 sm:via-charcoal-deep/70 to-charcoal-deep/35" />

        {/* Top subtle vignette for navbar blend */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal-deep/85 via-charcoal-deep/40 to-transparent pointer-events-none" />

        {/* Bottom subtle vignette for section transition */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-transparent pointer-events-none" />

        {/* Architectural subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_40%_40%,#000_60%,transparent_100%)] pointer-events-none" />
      </div>

      {/* Main Content Area - Vertically balanced accounting for fixed navbar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-xs uppercase tracking-[0.2em] text-brass-accent font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brass" />
            <span>Bespoke Luxury Furniture • Chattogram</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ivory leading-[1.08] tracking-tight">
            Furniture, <br />
            <span className="italic font-medium text-brass-accent">Crafted Around You.</span>
          </h1>

          {/* Sub-headline / Market Positioning */}
          <p className="text-base sm:text-lg md:text-xl text-ivory/85 max-w-2xl font-light leading-relaxed">
            Heaven Furniture Mart creates premium luxury and custom bespoke furniture tailored around your space, taste, and lifestyle. Experience true heirloom craftsmanship from our flagship Agrabad studio.
          </p>

          {/* Quick Proof Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brass-accent shrink-0" />
              <span>100% Bespoke Sizing</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brass-accent shrink-0" />
              <span>Seasoned Solid Hardwood</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brass-accent shrink-0" />
              <span>White-Glove Installation</span>
            </div>
          </div>

          {/* Primary & Secondary Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Button
              variant="brass"
              size="lg"
              onClick={onOpenQuote}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="shadow-lg shadow-brass/20"
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
              variant="dark-outline"
              size="lg"
              href="#collections"
            >
              View Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar & Ambient Gallery Controls */}
      <div className="relative z-10 border-t border-white/10 bg-charcoal-deep/60 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Flagship Showroom Location Tag */}
          <div className="flex items-center gap-2.5 text-xs text-ivory/80">
            <MapPin className="w-4 h-4 text-brass-accent shrink-0" />
            <span>
              Flagship Studio: <strong className="text-ivory font-semibold">Opposite RAK Ceramics, Agrabad Access Road</strong>, Chattogram
            </span>
          </div>

          {/* Background Ambient Showcase Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-brass-accent font-medium">
                {heroSlides[currentSlide].category}:
              </span>
              <span className="text-xs text-ivory/90 font-serif italic truncate max-w-[200px]">
                {heroSlides[currentSlide].title}
              </span>
            </div>

            {/* Slide Navigator Dots / Pills */}
            <div className="flex items-center gap-1.5">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-7 bg-brass-accent'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View ${slide.title}`}
                />
              ))}
            </div>

            {/* Arrow Navigators */}
            <div className="flex items-center gap-1 pl-2 border-l border-white/15">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-full hover:bg-white/10 text-ivory/80 hover:text-ivory transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 rounded-full hover:bg-white/10 text-ivory/80 hover:text-ivory transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
