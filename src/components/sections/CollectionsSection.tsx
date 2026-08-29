import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Eye, MessageSquare, Layers, ArrowRight, Sparkles, Compass, CheckCircle2, SlidersHorizontal, Maximize2 } from 'lucide-react'
import { collectionsData, categoryTabs } from '../../data/collections'
import { FurnitureCategory, CollectionItem } from '../../types'
import { Button } from '../ui/Button'

import { LUXURY_EASE } from '../../lib/motion'

interface CollectionsSectionProps {
  onInspectItem: (item: CollectionItem, index: number) => void
  onSelectForQuote: (item: CollectionItem) => void
  activeLightboxIndex?: number
  isLightboxOpen?: boolean
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onInspectItem,
  onSelectForQuote,
  activeLightboxIndex = 0,
  isLightboxOpen = false,
}) => {
  const [activeTab, setActiveTab] = useState<FurnitureCategory | 'all'>('all')

  const filteredItems =
    activeTab === 'all'
      ? collectionsData
      : collectionsData.filter((item) => item.category === activeTab)

  // Calculate exact Bento column span for each item so every row fills exactly 12 columns
  const getColSpan = (index: number, isAllTab: boolean): string => {
    if (isAllTab) {
      const pattern = index % 12
      switch (pattern) {
        case 0:
          return 'md:col-span-8' // Row 1 (8 + 4 = 12)
        case 1:
          return 'md:col-span-4'
        case 2:
          return 'md:col-span-4' // Row 2 (4 + 8 = 12)
        case 3:
          return 'md:col-span-8'
        case 4:
          return 'md:col-span-6' // Row 3 (6 + 6 = 12)
        case 5:
          return 'md:col-span-6'
        case 6:
          return 'md:col-span-8' // Row 4 (8 + 4 = 12)
        case 7:
          return 'md:col-span-4'
        case 8:
          return 'md:col-span-4' // Row 5 (4 + 8 = 12)
        case 9:
          return 'md:col-span-8'
        case 10:
          return 'md:col-span-6' // Row 6 (6 + 6 = 12)
        case 11:
          return 'md:col-span-6'
        default:
          return 'md:col-span-6'
      }
    } else {
      // 3 items per category (Row 1: 8 + 4 = 12; Row 2: 6 + 6 [Atelier card] = 12)
      if (index === 0) return 'md:col-span-8'
      if (index === 1) return 'md:col-span-4'
      if (index === 2) return 'md:col-span-6'
      return 'md:col-span-6'
    }
  }

  return (
    <section
      id="collections"
      aria-label="Curated Furniture Collections"
      className="pt-20 md:pt-28 pb-0 bg-sand/30 border-t border-sand-border relative"
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header with Staggered Scroll Motion */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
            className="max-w-3xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sand/80 border border-sand-border text-xs sm:text-sm uppercase tracking-[0.18em] text-charcoal-brown font-semibold mb-3">
              <Layers className="w-4 h-4 text-brass" />
              <span>Bento Showcase</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight mb-3">
              Curated Collections & <br />
              <span className="italic font-medium">Bespoke Compositions.</span>
            </h2>

            <p className="text-base sm:text-lg text-brown-muted leading-relaxed font-light">
              Every creation can be tailored in wood species, dimensions, fabric swatches, and structural layout to complement your residence.
            </p>
          </motion.div>

          {/* Quick Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: LUXURY_EASE }}
            className="shrink-0"
          >
            <a
              href="#quote"
              className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal-teal hover:text-brass flex items-center gap-2 transition-colors py-2"
            >
              <span>Request Custom Dimension Quote</span>
              <ArrowRight className="w-4 h-4 text-brass" />
            </a>
          </motion.div>
        </div>

        {/* Category Navigation Tabs with Smooth Animated Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: LUXURY_EASE }}
          className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-sand-border"
        >
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 sm:px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer border ${
                  isActive
                    ? 'text-ivory border-charcoal-teal'
                    : 'bg-ivory text-charcoal-brown hover:bg-sand/70 border-sand-border'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-charcoal-teal z-0"
                    transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{tab.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 font-mono transition-colors ${
                      isActive ? 'bg-brass text-charcoal-deep font-bold' : 'bg-sand text-charcoal-brown'
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Bento Grid: 12-Column Layout */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: LUXURY_EASE }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {filteredItems.map((item, index) => {
            const originalIndex = collectionsData.findIndex((c) => c.id === item.id)
            const colSpan = getColSpan(index, activeTab === 'all')
            const isLargeCard = colSpan.includes('col-span-8')
            const isTransitionActive = isLightboxOpen && originalIndex === activeLightboxIndex

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.035, ease: LUXURY_EASE }}
                className={`${colSpan} col-span-1 bg-ivory border border-sand-border hover:border-brass/60 hover:shadow-xl transition-[border-color,box-shadow] duration-300 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Image Container with Click / Hover Inspect */}
                <div
                  onClick={() => onInspectItem(item, originalIndex)}
                  className={`relative overflow-hidden bg-charcoal-deep cursor-pointer ${isLargeCard ? 'aspect-16/9 md:aspect-21/9' : 'aspect-16/10'}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      viewTransitionName: isTransitionActive ? 'active-collection-image' : 'none',
                    }}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Category / Featured Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="bg-charcoal-deep/85 backdrop-blur-xs text-brass text-xs uppercase tracking-wider font-semibold px-2.5 py-1 border border-charcoal-border">
                      {item.categoryLabel}
                    </div>
                    {item.isFeatured && (
                      <div className="bg-brass text-charcoal-deep text-xs uppercase tracking-wider font-bold px-2 py-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Top Right Inspect Trigger */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onInspectItem(item, originalIndex)
                    }}
                    className="absolute top-3 right-3 p-2 bg-charcoal-deep/80 text-ivory hover:bg-brass hover:text-charcoal-deep border border-charcoal-border opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
                    aria-label={`Inspect ${item.title}`}
                    title="Inspect Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Dimensions Pill Overlay */}
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-ivory/90 bg-charcoal-deep/85 px-2.5 py-1 border border-charcoal-border">
                    {item.dimensions}
                  </div>
                </div>

                {/* Card Content Block */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal-teal group-hover:text-brass-dark transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-brass-dark font-medium italic mb-2.5">
                      "{item.tagline}"
                    </p>

                    <p className="text-sm sm:text-[15px] text-charcoal-brown/85 line-clamp-3 leading-relaxed mb-4 font-light">
                      {item.description}
                    </p>

                    {/* Materials List */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 bg-sand/60 text-charcoal-brown font-medium border border-sand-border/80"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-sand-border/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onInspectItem(item, originalIndex)}
                      className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-brown hover:text-brass transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                    >
                      <Eye className="w-4 h-4 text-brass" />
                      <span>Inspect</span>
                    </button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onSelectForQuote(item)}
                      icon={<MessageSquare className="w-3.5 h-3.5" />}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </motion.article>
            )
          })}

          {/* Category View: Atelier Card to complete the 12-column row (6 + 6) */}
          {activeTab !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: filteredItems.length * 0.035, ease: LUXURY_EASE }}
              className="md:col-span-6 col-span-1 bg-charcoal-teal text-ivory border border-charcoal-border p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-surface border border-charcoal-border text-xs sm:text-sm uppercase tracking-[0.18em] text-brass font-semibold">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Bespoke Atelier</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-ivory leading-snug">
                  Need Custom Proportions for Your Room?
                </h3>

                <p className="text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                  Every collection piece can be modified in length, depth, timber species, or upholstery palette to align with your interior blueprints.
                </p>

                <div className="space-y-2.5 pt-2 text-sm text-ivory/90">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                    <span>Free architectural floorplan consultation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                    <span>Imported Italian marble & Belgian fabrics</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  variant="brass"
                  size="md"
                  href="#quote"
                  icon={<Compass className="w-4 h-4" />}
                  className="w-full"
                >
                  Request Bespoke Dimensions
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Edge-to-Edge Architectural Layout Banner */}
      <div className="w-full mt-16 sm:mt-20 bg-charcoal-teal text-ivory border-y border-charcoal-border py-12 sm:py-16 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-charcoal-deep/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-surface border border-charcoal-border text-xs sm:text-sm uppercase tracking-[0.18em] text-brass font-semibold">
              <SlidersHorizontal className="w-4 h-4 text-brass" />
              <span>Atelier Customization</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory leading-snug">
              Have a Specific Architectural Layout in Mind?
            </h3>
            <p className="text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
              Our master woodcraft artisans in Agrabad engineer furniture scaled directly to your apartment or villa floorplan.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <Button
              variant="brass"
              size="md"
              href="#quote"
              icon={<Compass className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Consult Studio Architect
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
