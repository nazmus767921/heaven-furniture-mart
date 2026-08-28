import { LeadCaptureConfig, QuoteFormData } from '../types'
import { siteConfig } from './site'

export const leadCaptureConfig: LeadCaptureConfig = {
  /**
   * Replace this endpoint URL with your production endpoint when ready:
   * e.g., 'https://api.web3forms.com/submit', Formspree, or Google Apps Script.
   * If empty or undefined, the form provides immediate direct WhatsApp dispatch.
   */
  endpointUrl: '',
  enableWhatsAppFallback: true,
  whatsAppPhone: siteConfig.contact.phoneRaw,
}

export function buildWhatsAppQuoteUrl(data: QuoteFormData): string {
  const categoryLabels: Record<string, string> = {
    living: 'Living Room Suite',
    bedroom: 'Bedroom Set',
    dining: 'Dining Suite',
    office: 'Executive / Office Suite',
    bespoke: 'Full Bespoke Customization',
    full_home: 'Whole Home Interior Styling',
    other: 'Custom Inquiries',
  }

  const categoryName = categoryLabels[data.requirementCategory] || data.requirementCategory

  const lines = [
    `*✨ New Consultation & Quote Inquiry — Heaven Furniture Mart*`,
    `----------------------------------------`,
    `*Client Name:* ${data.fullName}`,
    `*Phone / WhatsApp:* ${data.phoneOrWhatsApp}`,
    `*Requirement:* ${categoryName}`,
    data.spaceOrRoomType ? `*Space/Room Focus:* ${data.spaceOrRoomType}` : null,
    data.approximateTimeline ? `*Target Timeline:* ${data.approximateTimeline}` : null,
    data.customNotes ? `*Project Details & Notes:* ${data.customNotes}` : null,
    `----------------------------------------`,
    `Sent from Heaven Furniture Mart Digital Studio`,
  ].filter(Boolean)

  const message = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${leadCaptureConfig.whatsAppPhone.replace('+', '')}?text=${message}`
}
