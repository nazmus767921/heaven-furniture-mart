import React, { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Check, MessageSquare, PhoneCall } from 'lucide-react'
import { CollectionItem } from '../../types'
import { siteConfig } from '../../config/site'
import { Button } from './Button'

interface LightboxModalProps {
  isOpen: boolean
  items: CollectionItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (newIndex: number) => void
  onSelectForQuote?: (item: CollectionItem) => void
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNavigate,
  onSelectForQuote,
}) => {
  const currentItem = items[currentIndex]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1)
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) onNavigate(currentIndex + 1)
    },
    [isOpen, currentIndex, items.length, onClose, onNavigate]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !currentItem) return null

  const handleInquireClick = () => {
    if (onSelectForQuote) {
      onSelectForQuote(currentItem)
    }
    onClose()
    const quoteElement = document.getElementById('quote')
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const whatsAppInquiryUrl = `https://wa.me/${siteConfig.contact.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
    `Hello Heaven Furniture Mart, I am inquiring about the ${currentItem.title} (${currentItem.categoryLabel}). Could you share customization options and pricing?`
  )}`

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      style={{ viewTransitionName: 'lightbox-backdrop' }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-charcoal-deep/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        style={{ viewTransitionName: 'lightbox-card' }}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden bg-ivory rounded-none border border-sand-border/80 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image inspection"
          className="absolute top-4 right-4 z-20 p-2 text-charcoal-teal/70 hover:text-charcoal-teal bg-ivory/80 hover:bg-ivory border border-sand-border/50 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display Area */}
        <div className="relative md:w-3/5 bg-charcoal-deep/95 flex items-center justify-center min-h-[320px] md:min-h-[520px] overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            style={{ viewTransitionName: 'active-collection-image' }}
            className="w-full h-full object-contain max-h-[75vh]"
          />

          {/* Prev / Next Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={() => onNavigate(currentIndex - 1)}
              aria-label="Previous furniture piece"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-charcoal-deep/80 text-ivory hover:bg-brass hover:text-charcoal-deep transition-colors border border-charcoal-border cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {currentIndex < items.length - 1 && (
            <button
              onClick={() => onNavigate(currentIndex + 1)}
              aria-label="Next furniture piece"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-charcoal-deep/80 text-ivory hover:bg-brass hover:text-charcoal-deep transition-colors border border-charcoal-border cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Item Counter */}
          <div className="absolute bottom-3 left-3 bg-charcoal-deep/85 text-ivory/90 text-xs font-mono tracking-wider px-3 py-1.5 border border-charcoal-border font-semibold">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Details & Inquiries Panel */}
        <div
          style={{ viewTransitionName: 'lightbox-details' }}
          className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh] bg-ivory"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-brass font-bold">
                {currentItem.categoryLabel}
              </span>
              <span className="text-sand-dark">•</span>
              <span className="text-xs text-brown-muted tracking-wider font-semibold">Bespoke Atelier</span>
            </div>

            <h2 id="lightbox-title" className="font-serif text-2xl sm:text-3xl text-charcoal-teal leading-tight mb-2">
              {currentItem.title}
            </h2>

            <p className="text-sm sm:text-base text-brass-dark font-medium italic mb-3.5">
              "{currentItem.tagline}"
            </p>

            <p className="text-sm sm:text-base text-charcoal-brown/85 leading-relaxed mb-5 font-light">
              {currentItem.description}
            </p>

            {/* Materials List */}
            <div className="mb-5">
              <h4 className="text-xs uppercase tracking-wider text-charcoal-teal font-bold mb-2">
                Materials & Composition
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentItem.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs px-3 py-1 bg-sand/60 text-charcoal-brown font-medium border border-sand-border"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {currentItem.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-charcoal-teal font-bold mb-2">
                  Artisanal Highlights
                </h4>
                <ul className="space-y-2">
                  {currentItem.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal-brown/85">
                      <Check className="w-4 h-4 text-brass mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-sand-border space-y-2.5">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={handleInquireClick}
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Request Quote for This Piece
            </Button>

            <Button
              variant="whatsapp"
              size="md"
              className="w-full"
              href={whatsAppInquiryUrl}
              target="_blank"
              icon={<PhoneCall className="w-4 h-4" />}
            >
              WhatsApp Studio Specialist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
