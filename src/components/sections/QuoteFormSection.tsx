import React, { useState } from 'react'
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Send,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react'
import { QuoteFormData, FurnitureCategory } from '../../types'
import { siteConfig } from '../../config/site'
import { leadCaptureConfig, buildWhatsAppQuoteUrl } from '../../config/leadCapture'
import { Button } from '../ui/Button'

interface QuoteFormSectionProps {
  preselectedCategory?: FurnitureCategory | 'full_home' | 'other'
  preselectedItemTitle?: string
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  preselectedCategory,
  preselectedItemTitle,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneOrWhatsApp: '',
    requirementCategory: preselectedCategory || 'living',
    spaceOrRoomType: preselectedItemTitle ? `Inquiring about: ${preselectedItemTitle}` : '',
    approximateTimeline: 'Within 1 month',
    customNotes: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your name.'
    }

    if (!formData.phoneOrWhatsApp.trim()) {
      newErrors.phoneOrWhatsApp = 'Please provide a valid phone or WhatsApp number.'
    } else if (formData.phoneOrWhatsApp.replace(/\D/g, '').length < 8) {
      newErrors.phoneOrWhatsApp = 'Please enter a valid phone number (at least 8 digits).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Check if external API endpoint is configured
    if (leadCaptureConfig.endpointUrl && leadCaptureConfig.endpointUrl.trim() !== '') {
      try {
        const response = await fetch(leadCaptureConfig.endpointUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setSubmitSuccess(true)
        } else {
          setSubmitError('Unable to send quote request via form endpoint. Please use the WhatsApp option below.')
        }
      } catch (err) {
        setSubmitError('Submission error. Please connect directly via WhatsApp.')
      } finally {
        setIsSubmitting(false)
      }
    } else {
      // Default: generate WhatsApp URL and open in new tab
      setIsSubmitting(false)
      const waUrl = buildWhatsAppQuoteUrl(formData)
      window.open(waUrl, '_blank', 'noopener,noreferrer')
      setSubmitSuccess(true)
    }
  }

  const handleDirectWhatsApp = () => {
    if (!formData.fullName.trim() || !formData.phoneOrWhatsApp.trim()) {
      if (!validate()) return
    }
    const waUrl = buildWhatsAppQuoteUrl(formData)
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="quote"
      aria-label="Request a Bespoke Quote"
      className="py-20 md:py-28 bg-sand/30 border-t border-sand-border relative"
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form Intro & Reassurance */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sand/80 border border-sand-border text-xs sm:text-sm uppercase tracking-[0.18em] text-charcoal-brown font-semibold">
              <Sparkles className="w-4 h-4 text-brass" />
              <span>Complimentary Quote & Consultation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight">
              Let’s Create Your <br />
              <span className="italic font-medium">Bespoke Living Space.</span>
            </h2>

            <p className="text-base sm:text-lg text-brown-muted leading-relaxed font-light">
              Share your room dimensions, furniture requirements, or inspirational sketches. Our senior designers will review your vision and provide tailored material recommendations and an itemized quotation.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 bg-ivory border border-sand-border space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-charcoal-teal uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Prefer Instant Messaging?</span>
              </div>
              <p className="text-sm text-brown-muted leading-relaxed">
                Connect immediately with our Agrabad studio design team on WhatsApp for prompt questions, pricing estimates, and catalog previews.
              </p>
              <Button
                variant="whatsapp"
                size="md"
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
                className="w-full sm:w-auto"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Chat on WhatsApp (+880 1960-481983)
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="space-y-2.5 pt-2 text-sm text-charcoal-brown/90">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brass shrink-0" />
                <span>100% Confidential • No high-pressure sales</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                <span>Free 3D floor plan layout consultation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                <span>Direct factory craftsmanship pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7 bg-ivory p-6 sm:p-10 border border-sand-border shadow-xl">
            {submitSuccess ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-teal">
                  Consultation Request Received
                </h3>
                <p className="text-sm sm:text-base text-brown-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our senior bespoke furniture consultant will review your requirements and reach out to you via <strong>{formData.phoneOrWhatsApp}</strong> shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    variant="whatsapp"
                    size="md"
                    onClick={handleDirectWhatsApp}
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Open Pre-filled WhatsApp Chat
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setSubmitSuccess(false)
                      setFormData({
                        fullName: '',
                        phoneOrWhatsApp: '',
                        requirementCategory: 'living',
                        spaceOrRoomType: '',
                        approximateTimeline: 'Within 1 month',
                        customNotes: '',
                      })
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-sand-border pb-4 mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-teal">
                    Request a Personalized Consultation
                  </h3>
                  <p className="text-sm text-brown-muted mt-1">
                    Fill in the details below to receive your tailored proposal.
                  </p>
                </div>

                {submitError && (
                  <div className="p-3.5 bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name & Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal-teal mb-1.5"
                    >
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Tanzim Ahmed"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value })
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined })
                      }}
                      className={`w-full px-4 py-3 bg-ivory-light border text-sm sm:text-base text-charcoal-teal focus:outline-none focus:ring-1 focus:ring-brass transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-sand-border'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phoneOrWhatsApp"
                      className="block text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal-teal mb-1.5"
                    >
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phoneOrWhatsApp"
                      type="tel"
                      required
                      placeholder="e.g. +880 1812-345678"
                      value={formData.phoneOrWhatsApp}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneOrWhatsApp: e.target.value })
                        if (errors.phoneOrWhatsApp) setErrors({ ...errors, phoneOrWhatsApp: undefined })
                      }}
                      className={`w-full px-4 py-3 bg-ivory-light border text-sm sm:text-base text-charcoal-teal focus:outline-none focus:ring-1 focus:ring-brass transition-all ${
                        errors.phoneOrWhatsApp ? 'border-red-400 bg-red-50/20' : 'border-sand-border'
                      }`}
                    />
                    {errors.phoneOrWhatsApp && (
                      <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.phoneOrWhatsApp}</p>
                    )}
                  </div>
                </div>

                {/* Furniture Requirement Selector */}
                <div>
                  <label
                    htmlFor="requirementCategory"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal-teal mb-1.5"
                  >
                    Primary Furniture Focus
                  </label>
                  <select
                    id="requirementCategory"
                    value={formData.requirementCategory}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        requirementCategory: e.target.value as QuoteFormData['requirementCategory'],
                      })
                    }
                    className="w-full px-4 py-3 bg-ivory-light border border-sand-border text-sm sm:text-base text-charcoal-teal focus:outline-none focus:ring-1 focus:ring-brass cursor-pointer"
                  >
                    <option value="living">Living Room Suite (Sofa, Vitrine, Coffee Table)</option>
                    <option value="bedroom">Master Bedroom Set (Solid Teak Bed, Wardrobe)</option>
                    <option value="dining">Grand Dining Suite (Marble / Teak Table, Chairs)</option>
                    <option value="office">Executive Workspace & Director Suite</option>
                    <option value="bespoke">Fully Bespoke Custom Commission</option>
                    <option value="full_home">Whole Home Furnishing & Styling</option>
                    <option value="other">Other Inquiries / Interior Millwork</option>
                  </select>
                </div>

                {/* Room Dimensions / Specific Item */}
                <div>
                  <label
                    htmlFor="spaceOrRoomType"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal-teal mb-1.5"
                  >
                    Space Details / Specific Item (Optional)
                  </label>
                  <input
                    id="spaceOrRoomType"
                    type="text"
                    placeholder="e.g. 14ft × 18ft drawing room in Khulshi / Inquiring about Marble Dining"
                    value={formData.spaceOrRoomType}
                    onChange={(e) => setFormData({ ...formData, spaceOrRoomType: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory-light border border-sand-border text-sm sm:text-base text-charcoal-teal focus:outline-none focus:ring-1 focus:ring-brass"
                  />
                </div>

                {/* Timeline Selector */}
                <div>
                  <label
                    htmlFor="approximateTimeline"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal-teal mb-1.5"
                  >
                    Target Completion Timeline
                  </label>
                  <select
                    id="approximateTimeline"
                    value={formData.approximateTimeline}
                    onChange={(e) => setFormData({ ...formData, approximateTimeline: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory-light border border-sand-border text-sm sm:text-base text-charcoal-teal focus:outline-none focus:ring-1 focus:ring-brass cursor-pointer"
                  >
                    <option value="Immediate (1–2 weeks)">Immediate (1–2 weeks)</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="2–3 months">2–3 months (Renovating / New Construction)</option>
                    <option value="Planning & Exploration">Planning & Exploration Phase</option>
                  </select>
                </div>

                {/* Custom Notes / Message */}
                <div>
                  <label
                    htmlFor="customNotes"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal-teal mb-1.5"
                  >
                    Project Notes & Design Preferences (Optional)
                  </label>
                  <textarea
                    id="customNotes"
                    rows={3}
                    placeholder="Mention any preferred timber, stain finishes, fabrics, or special architectural requirements..."
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory-light border border-sand-border text-sm sm:text-base text-charcoal-teal focus:outline-none focus:ring-1 focus:ring-brass resize-y"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 space-y-3">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Processing Request...' : 'Send Consultation Request'}
                  </Button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-xs sm:text-sm text-brown-muted">
                    <HelpCircle className="w-4 h-4 text-brass" />
                    <span>Clicking send will also generate a formatted WhatsApp summary.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
