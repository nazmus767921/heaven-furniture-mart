import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Sparkles, Layers, Award, Compass, ArrowRight } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'
import { fadeInUp, staggerContainer, LUXURY_EASE } from '../../lib/motion'

interface BrandIntroSectionProps {
  onOpenQuote: () => void
}

export const BrandIntroSection: React.FC<BrandIntroSectionProps> = ({ onOpenQuote }) => {
  const sectionRef = useRef<HTMLElement>(null)

  // Subtle image parallax inside the left column container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.02])

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="Brand Philosophy"
      className="bg-charcoal-teal text-ivory relative overflow-hidden border-t border-charcoal-border"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-charcoal-deep/80 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-full">
          {/* Left Column: Full-Bleed Authentic Brand Visual Banner with Smooth Parallax Depth */}
          <div className="lg:col-span-5 relative overflow-hidden bg-charcoal-deep group min-h-[400px] sm:min-h-[480px] lg:min-h-[720px] flex flex-col justify-end">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0 w-full h-[112%] -top-[6%] will-change-transform"
            >
              <img
                src="/images/luxury-living-room-2.webp"
                alt="Heaven Furniture Mart Vitrine Showcase crafted for luxury living"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </motion.div>

            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/95 via-charcoal-deep/40 to-transparent pointer-events-none" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-charcoal-teal/60 pointer-events-none" />

            {/* In-Image Caption & Atelier Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: LUXURY_EASE }}
              className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-3"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-brass font-bold block mb-1">
                  Agrabad Flagship Collection
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-ivory leading-tight">
                  Palazzo Arch Vitrine & Showcase
                </h3>
                <p className="text-sm text-ivory/80 mt-1">
                  Curved beveled float glass & solid brass accents
                </p>
              </div>

              {/* Sub-label */}
              <div className="flex items-center justify-between text-xs sm:text-sm text-ivory/75 pt-2 border-t border-charcoal-border/70 font-medium">
                <span>Chattogram Atelier</span>
                <span className="text-brass">Est. 2020</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Narrative & Founder Quote with Staggered Scroll Viewport */}
          <div className="lg:col-span-7 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 flex flex-col justify-center space-y-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-3xl space-y-5"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-charcoal-surface border border-charcoal-border text-xs sm:text-sm uppercase tracking-[0.18em] text-brass font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Our Philosophy</span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ivory leading-tight">
                Not a Mass Retailer. <br />
                <span className="italic text-brass-light font-medium">
                  A Bespoke Interior Atelier.
                </span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-ivory/90 leading-relaxed font-light">
                We believe your home should never be defined by cookie-cutter dimensions or flat-pack catalog furniture. At Heaven Furniture Mart, every dining table, sofa ensemble, and master bedroom suite is conceived as an architectural statement—meticulously engineered around the exact contours of your living space and the cadence of your daily life.
              </motion.p>
            </motion.div>

            {/* Founder Quote Card with subtle scroll entrance */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: LUXURY_EASE }}
              className="p-6 sm:p-7 bg-charcoal-surface/90 border-l-2 border-brass border-y border-r border-charcoal-border shadow-lg relative max-w-3xl"
            >
              <blockquote className="font-serif text-lg sm:text-xl text-ivory italic leading-relaxed">
                "{siteConfig.founder.quote}"
              </blockquote>
              <div className="mt-4 pt-3 border-t border-charcoal-border/70 flex items-center justify-between">
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-brass">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/75">
                    {siteConfig.founder.title}, Heaven Furniture Mart
                  </p>
                </div>
                <div className="text-xs uppercase tracking-wider px-3 py-1 bg-charcoal-deep border border-charcoal-border text-brass/90 font-medium">
                  Agrabad Studio
                </div>
              </div>
            </motion.div>

            {/* 3 Core Tenets */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="p-4 sm:p-5 bg-charcoal-deep/60 border border-charcoal-border hover:border-brass/40 transition-colors">
                <Compass className="w-5 h-5 text-brass mb-2.5" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-ivory mb-1.5">
                  Bespoke Sizing
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  Tailored to your architectural layout and room clearances.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-4 sm:p-5 bg-charcoal-deep/60 border border-charcoal-border hover:border-brass/40 transition-colors">
                <Layers className="w-5 h-5 text-brass mb-2.5" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-ivory mb-1.5">
                  Seasoned Hardwood
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  Kiln-dried Chittagong teak, solid mahogany, and marble.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-4 sm:p-5 bg-charcoal-deep/60 border border-charcoal-border hover:border-brass/40 transition-colors">
                <Award className="w-5 h-5 text-brass mb-2.5" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-ivory mb-1.5">
                  Master Artisans
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  Generational woodcarvers and joiners in our in-house atelier.
                </p>
              </motion.div>
            </motion.div>

            {/* Consultation Trigger */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-3xl"
            >
              <Button
                variant="brass"
                size="md"
                onClick={onOpenQuote}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Discuss Your Space With Us
              </Button>

              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-ivory/85 hover:text-brass transition-colors py-2 px-3 text-center sm:text-left"
              >
                Visit Flagship Showroom →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

