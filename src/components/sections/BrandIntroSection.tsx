import React from 'react'
import { Sparkles, Layers, Award, Compass, ArrowRight } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'

interface BrandIntroSectionProps {
  onOpenQuote: () => void
}

export const BrandIntroSection: React.FC<BrandIntroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="about"
      aria-label="Brand Philosophy"
      className="py-20 md:py-28 bg-charcoal-teal text-ivory relative overflow-hidden"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-charcoal-deep/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Brand Visual Banner */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden border border-charcoal-border shadow-2xl bg-charcoal-deep group">
              <img
                src="/images/luxury-living-room-2.jpg"
                alt="Heaven Furniture Mart Vitrine Showcase crafted for luxury living"
                loading="lazy"
                decoding="async"
                className="w-full aspect-4/5 object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[0.2em] text-brass font-bold block mb-1">
                  Agrabad Flagship Collection
                </span>
                <p className="font-serif text-xl sm:text-2xl text-ivory">
                  Palazzo Arch Vitrine & Showcase
                </p>
                <p className="text-sm text-ivory/80 mt-1">
                  Curved beveled float glass & solid brass accents
                </p>
              </div>
            </div>

            {/* Sub-label */}
            <div className="flex items-center justify-between text-sm text-ivory/75 px-1 font-medium">
              <span>Chattogram Atelier</span>
              <span className="text-brass">Est. 2020</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Founder Quote */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-charcoal-surface border border-charcoal-border text-xs sm:text-sm uppercase tracking-[0.18em] text-brass font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ivory leading-tight mb-5">
                Not a Mass Retailer. <br />
                <span className="italic text-brass-light font-medium">
                  A Bespoke Interior Atelier.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-ivory/90 leading-relaxed font-light mb-6">
                We believe your home should never be defined by cookie-cutter dimensions or flat-pack catalog furniture. At Heaven Furniture Mart, every dining table, sofa ensemble, and master bedroom suite is conceived as an architectural statement—meticulously engineered around the exact contours of your living space and the cadence of your daily life.
              </p>
            </div>

            {/* Founder Quote Card */}
            <div className="p-6 sm:p-7 bg-charcoal-surface/90 border-l-2 border-brass border-y border-r border-charcoal-border shadow-lg relative">
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
            </div>

            {/* 3 Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 sm:p-5 bg-charcoal-deep/60 border border-charcoal-border">
                <Compass className="w-5 h-5 text-brass mb-2.5" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-ivory mb-1.5">
                  Bespoke Sizing
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  Tailored to your architectural layout and room clearances.
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-charcoal-deep/60 border border-charcoal-border">
                <Layers className="w-5 h-5 text-brass mb-2.5" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-ivory mb-1.5">
                  Seasoned Hardwood
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  Kiln-dried Chittagong teak, solid mahogany, and marble.
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-charcoal-deep/60 border border-charcoal-border">
                <Award className="w-5 h-5 text-brass mb-2.5" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-ivory mb-1.5">
                  Master Artisans
                </h4>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                  Generational woodcarvers and joiners in our in-house atelier.
                </p>
              </div>
            </div>

            {/* Consultation Trigger */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
