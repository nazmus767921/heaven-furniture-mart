import React, { useState } from 'react'
import { Sliders, Check, ArrowRight, Clock } from 'lucide-react'
import { bespokeProcessData } from '../../data/bespokeProcess'
import { Button } from '../ui/Button'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand/80 border border-sand-border text-xs uppercase tracking-[0.2em] text-charcoal-brown font-semibold mb-3">
            <Sliders className="w-3.5 h-3.5 text-brass" />
            <span>Tailored Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight mb-4">
            The Bespoke Journey: <br />
            <span className="italic font-medium">From Blueprint to Living Space.</span>
          </h2>

          <p className="text-sm sm:text-base text-brown-muted leading-relaxed font-light">
            Whether you are furnishing a new duplex in Khulshi, renovating an apartment in Nasirabad, or outfitting an executive suite in Agrabad, our master artisans translate your vision into enduring heirloom timber.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {bespokeProcessData.map((step, idx) => {
            const isSelected = activeStepIndex === idx
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-charcoal-teal text-ivory border-charcoal-teal shadow-md'
                    : 'bg-sand/40 hover:bg-sand/70 text-charcoal-brown border-sand-border'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs tracking-widest font-bold ${
                      isSelected ? 'text-brass' : 'text-brass-dark'
                    }`}
                  >
                    PHASE {step.stepNumber}
                  </span>
                  <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-brass' : 'text-brown-muted'}`} />
                </div>
                <h3 className="font-serif text-sm sm:text-base font-semibold leading-snug line-clamp-2">
                  {step.title}
                </h3>
              </button>
            )
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="bg-sand/30 border border-sand-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest px-3 py-1 bg-charcoal-teal text-brass font-mono font-bold">
                Step {currentStep.stepNumber} of 05
              </span>
              <span className="text-xs text-brown-muted font-medium">
                Estimated Duration: <strong className="text-charcoal-teal">{currentStep.duration}</strong>
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-teal">
              {currentStep.title}
            </h3>

            <p className="text-sm text-brown-muted leading-relaxed">
              {currentStep.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-2 space-y-2.5">
              <h4 className="text-xs uppercase tracking-widest text-charcoal-teal font-semibold">
                What We Deliver in This Phase:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentStep.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-charcoal-brown bg-ivory/80 p-2.5 border border-sand-border"
                  >
                    <Check className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
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
                src="/images/luxury-wardrobe-1.jpg"
                alt="Heaven Furniture Mart custom bespoke wardrobe and dressing atelier"
                loading="lazy"
                decoding="async"
                className="w-full aspect-4/3 sm:aspect-square object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <span className="text-[10px] uppercase tracking-widest text-brass font-bold block mb-1">
                  Custom Millwork & Storage
                </span>
                <p className="font-serif text-lg text-ivory">
                  Precision Built-In Wardrobes & Consoles
                </p>
                <p className="text-xs text-ivory/70 mt-1">
                  Engineered to exact ceiling & wall plumb lines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
