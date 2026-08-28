import React, { useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { BrandIntroSection } from './components/sections/BrandIntroSection'
import { TrustPillarsSection } from './components/sections/TrustPillarsSection'
import { CollectionsSection } from './components/sections/CollectionsSection'
import { BespokeHighlightSection } from './components/sections/BespokeHighlightSection'
import { ShowroomSection } from './components/sections/ShowroomSection'
import { QuoteFormSection } from './components/sections/QuoteFormSection'
import { LightboxModal } from './components/ui/LightboxModal'
import { MobileConversionBar } from './components/ui/MobileConversionBar'
import { collectionsData } from './data/collections'
import { CollectionItem, FurnitureCategory } from './types'

export const App: React.FC = () => {
  // Lightbox modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0)

  // Preselected category & item title for the Quote form
  const [selectedQuoteCategory, setSelectedQuoteCategory] = useState<FurnitureCategory | 'full_home' | 'other'>('living')
  const [selectedQuoteTitle, setSelectedQuoteTitle] = useState<string>('')

  const handleOpenQuote = (category?: FurnitureCategory, itemTitle?: string) => {
    if (category) setSelectedQuoteCategory(category)
    if (itemTitle) setSelectedQuoteTitle(itemTitle)

    const quoteSection = document.getElementById('quote')
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInspectItem = (_item: CollectionItem, index: number) => {
    setActiveLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const handleSelectForQuote = (item: CollectionItem) => {
    setSelectedQuoteCategory(item.category)
    setSelectedQuoteTitle(item.title)
    const quoteSection = document.getElementById('quote')
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal-brown selection:bg-brass/20 selection:text-charcoal-teal">
      {/* Top Fixed Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection onOpenQuote={() => handleOpenQuote()} />
        <BrandIntroSection onOpenQuote={() => handleOpenQuote()} />
        <TrustPillarsSection onOpenQuote={() => handleOpenQuote()} />
        <CollectionsSection
          onInspectItem={handleInspectItem}
          onSelectForQuote={handleSelectForQuote}
        />
        <BespokeHighlightSection onOpenQuote={() => handleOpenQuote('bespoke')} />
        <ShowroomSection />
        <QuoteFormSection
          key={`${selectedQuoteCategory}-${selectedQuoteTitle}`}
          preselectedCategory={selectedQuoteCategory}
          preselectedItemTitle={selectedQuoteTitle}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Conversion Bar */}
      <MobileConversionBar />

      {/* Interactive Lightbox Inspector */}
      <LightboxModal
        isOpen={isLightboxOpen}
        items={collectionsData}
        currentIndex={activeLightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
        onSelectForQuote={handleSelectForQuote}
      />
    </div>
  )
}

export default App
