import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sliders, Check, ArrowRight, Clock } from 'lucide-react'
import { bespokeProcessData } from '../../data/bespokeProcess'
import { Button } from '../ui/Button'
import { LUXURY_EASE, fadeInUp, staggerContainer } from '../../lib/motion'

interface BespokeHighlightSectionProps {
  onOpenQuote: () => void
}

export const BespokeHighlightSection: React.FC<BespokeHighlightSectionProps> = ({ onOpenQuote }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const currentStep = bespokeProcessData[activeStepIndex]

  return (
    <section
      id="bespoke"
      aria-label="Bespoke Custom Furniture Atelier"
      className="py-20 md:py-28 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header with Staggered Scroll Entrance */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-4xl text-left mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sand/80 border border-sand-border text-xs sm:text-sm uppercase tracking-[0.18em] text-charcoal-brown font-semibold mb-3">
            <Sliders className="w-4 h-4 text-brass" />
            <span>Tailored Architecture</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight mb-4">
            The Bespoke Journey: <br />
            <span className="italic font-medium">From Blueprint to Living Space.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-brown-muted leading-relaxed font-light">
            Whether you are furnishing a new duplex in Khulshi, renovating an apartment in Nasirabad, or outfitting an executive suite in Agrabad, our master artisans translate your vision into enduring heirloom timber.
          </motion.p>
        </motion.div>

        {/* Step Navigation Tabs with Active Layout Transition */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3.5 mb-10"
        >
          {bespokeProcessData.map((step, idx) => {
            const isSelected = activeStepIndex === idx
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-4 sm:p-5 text-left border transition-colors duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'text-ivory border-charcoal-teal shadow-md'
                    : 'bg-sand/40 hover:bg-sand/70 text-charcoal-brown border-sand-border'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeBespokeStep"
                    className="absolute inset-0 bg-charcoal-teal z-0"
                    transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                  />
                )}
                <div className="relative z-10 flex items-center justify-between mb-2.5">
                  <span
                    className={`font-mono text-xs sm:text-sm tracking-wider font-bold ${
                      isSelected ? 'text-brass' : 'text-brass-dark'
                    }`}
                  >
                    PHASE {step.stepNumber}
                  </span>
                  <Clock className={`w-4 h-4 ${isSelected ? 'text-brass' : 'text-brown-muted'}`} />
                </div>
                <h3 className="relative z-10 font-serif text-base sm:text-lg font-semibold leading-snug line-clamp-2">
                  {step.title}
                </h3>
              </button>
            )
          })}
        </motion.div>

        {/* Active Step Detailed Showcase Panel with AnimatePresence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: LUXURY_EASE }}
          className="bg-sand/30 border border-sand-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.stepNumber}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: LUXURY_EASE }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 bg-charcoal-teal text-brass font-mono font-bold">
                    Step {currentStep.stepNumber} of 05
                  </span>
                  <span className="text-sm text-brown-muted font-medium">
                    Estimated Duration: <strong className="text-charcoal-teal">{currentStep.duration}</strong>
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-teal">
                  {currentStep.title}
                </h3>

                <p className="text-base sm:text-lg text-charcoal-brown/90 leading-relaxed font-light">
                  {currentStep.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-3">
                  <h4 className="text-xs sm:text-sm uppercase tracking-wider text-charcoal-teal font-bold">
                    What We Deliver in This Phase:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStep.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-charcoal-brown bg-ivory/90 p-3 border border-sand-border"
                      >
                        <Check className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenQuote}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Begin Your Bespoke Commission
              </Button>
            </div>
          </div>

          {/* Right Visual Card for Bespoke Customization */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-sand-border shadow-xl bg-charcoal-deep group">
              <img
                src="/images/luxury-wardrobe-1.webp"
                alt="Heaven Furniture Mart custom bespoke wardrobe and dressing atelier"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full aspect-4/3 sm:aspect-square object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <span className="text-xs uppercase tracking-wider text-brass font-bold block mb-1">
                  Custom Millwork & Storage
                </span>
                <p className="font-serif text-xl text-ivory">
                  Precision Built-In Wardrobes & Consoles
                </p>
                <p className="text-sm text-ivory/80 mt-1">
                  Engineered to exact ceiling & wall plumb lines
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

