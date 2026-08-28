import React from 'react'
import { motion } from 'motion/react'
import {
  Compass,
  Sparkles,
  Building2,
  Truck,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle2,
} from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'
import { fadeInUp, staggerContainer } from '../../lib/motion'

interface TrustPillarsSectionProps {
  onOpenQuote: () => void
}

export const TrustPillarsSection: React.FC<TrustPillarsSectionProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="why-us"
      aria-label="Why Choose Heaven Furniture Mart"
      className="pt-20 md:pt-28 pb-0 bg-ivory relative border-t border-sand-border"
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header with Staggered Scroll Entrance */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-4xl mb-16 text-left"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sand/80 border border-sand-border text-xs sm:text-sm uppercase tracking-[0.18em] text-charcoal-brown font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-brass" />
            <span>Uncompromising Standard</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight mb-4">
            Why Discerning Homeowners <br />
            <span className="italic font-medium">Choose Heaven Furniture.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-brown-muted leading-relaxed font-light">
            We operate on a philosophy of absolute material honesty, architectural tailoring, and complete peace of mind from the initial spatial consultation to white-glove living room installation.
          </motion.p>
        </motion.div>

        {/* The Architectural Atelier Bento Grid with Viewport Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Card 1: Flagship Master Craftsmanship & Material Honesty Card (8 Columns) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-8 bg-charcoal-teal text-ivory border border-charcoal-border shadow-xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden hover:border-brass/40 transition-colors"
          >
            {/* Subtle ambient light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brass/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header & Number Tag */}
              <div className="flex items-center justify-between border-b border-charcoal-border/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs sm:text-sm tracking-widest text-brass font-bold">
                    01 / ATELIER MATERIA
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-charcoal-deep border border-charcoal-border text-xs text-brass uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Heirloom Longevity</span>
                </div>
              </div>

              {/* Title & Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory leading-snug">
                    Seasoned Chittagong Hardwoods & Generational Joinery
                  </h3>
                  <p className="text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                    We strictly reject particle board, MDF, and flat-pack veneers. Every framework is handcrafted from kiln-dried Chittagong teak and seasoned mahogany, locked with traditional mortise-and-tenon wood joinery and finished with multi-layer hand-rubbed oils.
                  </p>
                </div>

                {/* Visual Accent Thumbnail */}
                <div className="md:col-span-5 relative overflow-hidden border border-charcoal-border bg-charcoal-deep aspect-4/3 shadow-md">
                  <img
                    src="/images/chairs-1.webp"
                    alt="Heaven Furniture Mart seasoned hardwood craftsmanship and hand joinery"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-mono text-ivory/90 uppercase tracking-wider">
                    Solid Teak & Hand-Carved Joinery
                  </span>
                </div>
              </div>

              {/* Material Honesty Verification Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-charcoal-border/70">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 bg-charcoal-deep/60 p-2.5 border border-charcoal-border/70">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>100% Kiln-Dried Solid Teak & Mahogany</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 bg-charcoal-deep/60 p-2.5 border border-charcoal-border/70">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Imported Italian Marquina & Carrara Marble</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 bg-charcoal-deep/60 p-2.5 border border-charcoal-border/70">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Multi-Stage Hand-Rubbed Lacquer & Wax</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 bg-charcoal-deep/60 p-2.5 border border-charcoal-border/70">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Zero MDF / Zero Particle Board Shortcuts</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Spatial & 3D Architectural Advisory (4 Columns) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 bg-sand/40 hover:bg-sand/70 hover:shadow-lg border border-sand-border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sand-border/80 pb-3">
                <span className="font-mono text-xs sm:text-sm tracking-widest text-brass-dark font-bold">
                  02 / SPATIAL TAILORING
                </span>
                <div className="w-10 h-10 bg-ivory border border-sand-border flex items-center justify-center text-charcoal-teal group-hover:text-brass group-hover:border-brass transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-charcoal-teal font-semibold leading-snug">
                Custom Sized to Your Exact Floorplan
              </h3>

              <p className="text-sm sm:text-base text-charcoal-brown/85 leading-relaxed font-light">
                Bring your blueprints or room dimensions. Our senior spatial consultants analyze clearances, sightlines, and circulation to ensure seamless architectural harmony.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal-brown font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Free 3D layout & floor clearance advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Tailored duplex, villa & penthouse fits</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Flagship Agrabad Showroom (4 Columns) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 bg-sand/40 hover:bg-sand/70 hover:shadow-lg border border-sand-border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sand-border/80 pb-3">
                <span className="font-mono text-xs sm:text-sm tracking-widest text-brass-dark font-bold">
                  03 / PHYSICAL PRESENCE
                </span>
                <div className="w-10 h-10 bg-ivory border border-sand-border flex items-center justify-center text-charcoal-teal group-hover:text-brass group-hover:border-brass transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-charcoal-teal font-semibold leading-snug">
                Touch, Feel & Inspect In Person
              </h3>

              <p className="text-sm sm:text-base text-charcoal-brown/85 leading-relaxed font-light">
                Visit our curated flagship studio opposite RAK Ceramics on Agrabad Access Road to test cushion firmness, inspect wood grains, and browse imported fabric swatches.
              </p>

              <div className="p-3 bg-ivory border border-sand-border text-xs sm:text-sm text-charcoal-teal font-medium flex items-center justify-between">
                <span>Agrabad Access Road Studio</span>
                <span className="text-brass-dark font-bold">Open Sat – Thu</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: White-Glove In-House Delivery & Installation (4 Columns) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 bg-sand/40 hover:bg-sand/70 hover:shadow-lg border border-sand-border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sand-border/80 pb-3">
                <span className="font-mono text-xs sm:text-sm tracking-widest text-brass-dark font-bold">
                  04 / WHITE-GLOVE SERVICE
                </span>
                <div className="w-10 h-10 bg-ivory border border-sand-border flex items-center justify-center text-charcoal-teal group-hover:text-brass group-hover:border-brass transition-colors">
                  <Truck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-charcoal-teal font-semibold leading-snug">
                Direct Room Placement & Fitting
              </h3>

              <p className="text-sm sm:text-base text-charcoal-brown/85 leading-relaxed font-light">
                Our specialized in-house crew delivers, unboxes, positions, and installs each furniture piece with protective floor padding and a final artisanal polish.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal-brown font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Zero third-party courier handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Protective floor padding & on-site polish</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Transparent Milestone Pricing (4 Columns) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 bg-sand/40 hover:bg-sand/70 hover:shadow-lg border border-sand-border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sand-border/80 pb-3">
                <span className="font-mono text-xs sm:text-sm tracking-widest text-brass-dark font-bold">
                  05 / FINANCIAL PEACE
                </span>
                <div className="w-10 h-10 bg-ivory border border-sand-border flex items-center justify-center text-charcoal-teal group-hover:text-brass group-hover:border-brass transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-charcoal-teal font-semibold leading-snug">
                Transparent Milestone Invoicing
              </h3>

              <p className="text-sm sm:text-base text-charcoal-brown/85 leading-relaxed font-light">
                Itemized quotes with clear material breakdowns and zero hidden surcharges. Phased milestone payments linked directly to workshop crafting stages.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal-brown font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Itemized timber & upholstery breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Direct factory craftsmanship rates</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Edge-to-Edge Architectural Conversion Banner */}
      <div className="w-full mt-20 sm:mt-24 bg-charcoal-teal text-ivory border-y border-charcoal-border py-12 sm:py-16 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-charcoal-deep/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-surface border border-charcoal-border text-xs sm:text-sm uppercase tracking-[0.18em] text-brass font-semibold">
              <Sparkles className="w-4 h-4 text-brass" />
              <span>Complimentary Architectural Advisory</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory leading-tight">
              Bring Your Floor Plan or Inspiration Photos
            </h3>
            <p className="text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
              Meet our senior furniture designers at our Agrabad showroom or consult remotely to explore timber grades, fabrics, and 3D space layouts tailored to your lifestyle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
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
