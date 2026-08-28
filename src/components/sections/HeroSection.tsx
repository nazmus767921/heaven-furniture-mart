import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { ArrowRight, MessageSquare, MapPin, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'
import { LUXURY_EASE, fadeInUp, staggerContainer } from '../../lib/motion'

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
    image: '/images/luxury-sofa-1.webp',
    title: 'The Royal Sovereign Salon Suite',
    subtitle: 'Solid Seasoned Mahogany & Hand-Carved Gold Leaf',
    category: 'Signature Living',
  },
  {
    image: '/images/luxury-living-room-2.webp',
    title: 'The Sovereign Grand Lounge',
    subtitle: 'Contemporary Luxury & Custom Wood Joinery',
    category: 'Modern Bespoke',
  },
  {
    image: '/images/dining-1.webp',
    title: 'The Imperial Marquina Suite',
    subtitle: 'Polished Italian Marble & Hand-Sculpted Chairs',
    category: 'Luxury Dining',
  },
  {
    image: '/images/bedroom-1.webp',
    title: 'The Presidential Master Chamber',
    subtitle: 'Hand-Tufted Velvet & Seasoned Solid Teak',
    category: 'Royal Bedroom',
  },
]

const SLIDE_DURATION_MS = 6500

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  // Scroll parallax effects for layered depth (GPU-accelerated transforms)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Background shifts gently downwards (15% relative speed)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  // Content fades and drifts slightly upwards on scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(interval)
  }, [isPaused, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Welcome to Heaven Furniture Mart"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-charcoal-deep text-ivory"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Bleed Background Images with Scroll Parallax & Crossfade */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
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
              width={1920}
              height={1080}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding={index === 0 ? 'sync' : 'async'}
              fetchPriority={index === 0 ? 'high' : 'low'}
              className={`w-full h-full object-cover object-center transition-transform duration-10000 ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/95 via-charcoal-deep/80 sm:via-charcoal-deep/70 to-charcoal-deep/35" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-charcoal-deep/90 via-charcoal-deep/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-transparent pointer-events-none" />

        {/* Architectural subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_40%_40%,#000_60%,transparent_100%)] pointer-events-none" />
      </motion.div>

      {/* Main Content Area - Vertically balanced accounting for fixed navbar */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-[1480px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 sm:pt-36 md:pt-40 pb-12 flex-1 flex flex-col justify-center will-change-transform"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl lg:max-w-4xl space-y-6 sm:space-y-7"
        >
          {/* Eyebrow Label */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-xs uppercase tracking-[0.2em] text-brass-accent font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brass" />
            <span>Bespoke Luxury Furniture • Chattogram</span>
          </motion.div>

          {/* Main Editorial Headline with Luxury Masked Entrance */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ivory leading-[1.08] tracking-tight"
          >
            Furniture, <br />
            <span className="italic font-medium text-brass-accent">Crafted Around You.</span>
          </motion.h1>

          {/* Sub-headline / Market Positioning */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-ivory/85 max-w-2xl lg:max-w-3xl font-light leading-relaxed"
          >
            Heaven Furniture Mart creates premium luxury and custom bespoke furniture tailored around your space, taste, and lifestyle. Experience true heirloom craftsmanship from our flagship Agrabad studio.
          </motion.p>

          {/* Quick Proof Points */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2"
          >
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
          </motion.div>

          {/* Primary & Secondary Conversion Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
          >
            <Button
              variant="brass"
              size="md"
              onClick={onOpenQuote}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="shadow-lg shadow-brass/20"
            >
              Request a Consultation
            </Button>

            <Button
              variant="whatsapp"
              size="md"
              href={siteConfig.contact.whatsAppUrl}
              target="_blank"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              WhatsApp Us
            </Button>

            <Button
              variant="dark-outline"
              size="md"
              href="#collections"
            >
              View Collections
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero Bottom Bar & Ambient Gallery Controls */}
      <div className="relative z-10 border-t border-white/10 bg-charcoal-deep/75 backdrop-blur-md py-4">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Flagship Showroom Location Tag */}
          <div className="flex items-center gap-2.5 text-xs text-ivory/80">
            <MapPin className="w-4 h-4 text-brass-accent shrink-0" />
            <span>
              Flagship Studio: <strong className="text-ivory font-semibold">Opposite RAK Ceramics, Agrabad Access Road</strong>, Chattogram
            </span>
          </div>

          {/* Background Ambient Showcase Controls */}
          <div className="flex items-center gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[currentSlide].title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: LUXURY_EASE }}
                className="hidden sm:flex items-center gap-2"
              >
                <span className="text-[11px] uppercase tracking-widest text-brass-accent font-medium">
                  {heroSlides[currentSlide].category}:
                </span>
                <span className="text-xs text-ivory/90 font-serif italic truncate max-w-[200px]">
                  {heroSlides[currentSlide].title}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigator Dots / Pills with dynamic progress */}
            <div className="flex items-center gap-1.5">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlide
                return (
                  <button
                    key={slide.title}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative h-2 rounded-full overflow-hidden transition-all duration-400 cursor-pointer ${
                      isActive ? 'w-8 bg-white/20' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`View ${slide.title}`}
                  >
                    {isActive && (
                      <motion.div
                        key={`progress-${idx}-${isPaused}`}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? '100%' : '100%' }}
                        transition={{
                          duration: isPaused ? 0 : SLIDE_DURATION_MS / 1000,
                          ease: 'linear',
                        }}
                        className="absolute inset-0 bg-brass-accent rounded-full"
                      />
                    )}
                  </button>
                )
              })}
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

