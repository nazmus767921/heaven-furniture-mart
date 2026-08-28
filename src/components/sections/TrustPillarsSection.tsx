import React from 'react'
import {
  Compass,
  Sliders,
  Sparkles,
  Hammer,
  Building2,
  Truck,
  ShieldCheck,
  Award,
  ArrowRight,
  Phone,
} from 'lucide-react'
import { trustPointsData } from '../../data/trustPoints'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Sliders,
  Sparkles,
  Hammer,
  Building2,
  Truck,
  ShieldCheck,
  Award,
}

interface TrustPillarsSectionProps {
  onOpenQuote: () => void
}

export const TrustPillarsSection: React.FC<TrustPillarsSectionProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="why-us"
      aria-label="Why Choose Heaven Furniture Mart"
      className="py-20 md:py-28 bg-ivory relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sand/80 border border-sand-border text-xs sm:text-sm uppercase tracking-[0.18em] text-charcoal-brown font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-brass" />
            <span>Uncompromising Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight mb-4">
            Why Discerning Homeowners <br />
            <span className="italic font-medium">Choose Heaven Furniture.</span>
          </h2>

          <p className="text-base sm:text-lg text-brown-muted leading-relaxed font-light">
            We operate on a philosophy of absolute material honesty, architectural tailoring, and complete peace of mind from the initial spatial consultation to white-glove living room installation.
          </p>
        </div>

        {/* 8 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPointsData.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles
            return (
              <div
                key={pillar.id}
                className="p-6 bg-sand/40 hover:bg-sand/70 border border-sand-border transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-ivory border border-sand-border flex items-center justify-center text-charcoal-teal group-hover:text-brass group-hover:border-brass transition-colors mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="text-xs uppercase tracking-wider text-brass font-bold block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-serif text-xl text-charcoal-teal font-semibold leading-snug mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-charcoal-brown/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section Conversion Banner */}
        <div className="mt-14 p-6 sm:p-10 bg-charcoal-teal text-ivory border border-charcoal-border flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] text-brass font-semibold block">
              Complimentary Architectural Advisory
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
              Bring Your Floor Plan or Inspiration Photos
            </h3>
            <p className="text-sm sm:text-base text-ivory/80 max-w-xl leading-relaxed font-light">
              Meet our senior furniture designers at our Agrabad showroom or consult remotely to explore timber grades, fabrics, and 3D space layouts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              variant="brass"
              size="md"
              onClick={onOpenQuote}
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Book Free Consultation
            </Button>

            <Button
              variant="dark-outline"
              size="md"
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full sm:w-auto"
              icon={<Phone className="w-3.5 h-3.5" />}
            >
              {siteConfig.contact.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
