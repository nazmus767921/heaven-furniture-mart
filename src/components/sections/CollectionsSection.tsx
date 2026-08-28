import React, { useState } from 'react'
import { Eye, MessageSquare, Layers, ArrowRight } from 'lucide-react'
import { collectionsData, categoryTabs } from '../../data/collections'
import { FurnitureCategory, CollectionItem } from '../../types'
import { Button } from '../ui/Button'

interface CollectionsSectionProps {
  onInspectItem: (item: CollectionItem, index: number) => void
  onSelectForQuote: (item: CollectionItem) => void
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onInspectItem,
  onSelectForQuote,
}) => {
  const [activeTab, setActiveTab] = useState<FurnitureCategory | 'all'>('all')

  const filteredItems =
    activeTab === 'all'
      ? collectionsData
      : collectionsData.filter((item) => item.category === activeTab)

  return (
    <section
      id="collections"
      aria-label="Curated Furniture Collections"
      className="py-20 md:py-28 bg-sand/30 border-y border-sand-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand/80 border border-sand-border text-xs uppercase tracking-[0.2em] text-charcoal-brown font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-brass" />
              <span>Digital Luxury Showroom</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight mb-3">
              Curated Collections & <br />
              <span className="italic font-medium">Bespoke Compositions.</span>
            </h2>

            <p className="text-sm text-brown-muted leading-relaxed font-light">
              Every creation can be tailored in wood species, dimensions, fabric swatches, and structural layout to complement your residence.
            </p>
          </div>

          {/* Direct WhatsApp Prompt */}
          <div className="shrink-0">
            <a
              href="#quote"
              className="text-xs uppercase tracking-widest font-semibold text-charcoal-teal hover:text-brass flex items-center gap-2 transition-colors"
            >
              <span>Request Custom Dimension Quote</span>
              <ArrowRight className="w-4 h-4 text-brass" />
            </a>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-sand-border">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-charcoal-teal text-ivory border-charcoal-teal shadow-xs'
                    : 'bg-ivory text-charcoal-brown hover:bg-sand/70 border-sand-border'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const originalIndex = collectionsData.findIndex((c) => c.id === item.id)
            return (
              <article
                key={item.id}
                className="bg-ivory border border-sand-border hover:border-sand-dark transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xs hover:shadow-lg"
              >
                {/* Image Container with Hover Inspect */}
                <div className="relative aspect-4/3 overflow-hidden bg-charcoal-deep">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-charcoal-deep/85 backdrop-blur-xs text-brass text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 border border-charcoal-border">
                    {item.categoryLabel}
                  </div>

                  {/* Inspect Button Trigger */}
                  <button
                    onClick={() => onInspectItem(item, originalIndex)}
                    className="absolute inset-0 bg-charcoal-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-ivory text-xs uppercase tracking-wider font-semibold cursor-pointer"
                    aria-label={`Inspect ${item.title}`}
                  >
                    <span className="p-2.5 bg-charcoal-teal/90 rounded-full border border-brass/50 flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-4 h-4 text-brass" />
                      <span>Inspect Details</span>
                    </span>
                  </button>
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal-teal group-hover:text-brass-dark transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-brass-dark font-medium italic mb-2.5">
                      "{item.tagline}"
                    </p>

                    <p className="text-xs text-brown-muted line-clamp-3 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Materials preview */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.materials.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 bg-sand/50 text-charcoal-brown border border-sand-border/70"
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
                      className="text-xs font-semibold uppercase tracking-wider text-charcoal-brown hover:text-brass transition-colors flex items-center gap-1 cursor-pointer py-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-brass" />
                      <span>Inspect</span>
                    </button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onSelectForQuote(item)}
                      icon={<MessageSquare className="w-3 h-3" />}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
