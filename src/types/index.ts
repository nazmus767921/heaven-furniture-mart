export type FurnitureCategory = 'living' | 'bedroom' | 'dining' | 'office' | 'bespoke'

export interface CollectionItem {
  id: string
  title: string
  category: FurnitureCategory
  categoryLabel: string
  tagline: string
  description: string
  image: string
  thumbnail?: string
  woodType?: string
  materials: string[]
  dimensions?: string
  isFeatured?: boolean
  features: string[]
}

export interface TrustPoint {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
}

export interface TimelineMilestone {
  year: string
  title: string
  highlight: string
  description: string
}

export interface BespokeStep {
  stepNumber: string
  title: string
  duration: string
  description: string
  deliverables: string[]
}

export interface SiteConfig {
  brandName: string
  tagline: string
  marketMessage: string
  founder: {
    name: string
    title: string
    quote: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    phoneRaw: string
    email: string
    whatsApp: string
    whatsAppUrl: string
  }
  location: {
    street: string
    landmark: string
    area: string
    city: string
    country: string
    fullAddress: string
    googleMapsUrl: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  showroomHours: {
    days: string
    hours: string
    note: string
  }
  socials: {
    facebook: string
    instagram: string
    youtube: string
  }
}

export interface LeadCaptureConfig {
  /**
   * External Form Processing Endpoint (Web3Forms, Formspree, Google Apps Script, CRM webhook)
   * Leave empty or set to 'auto' to use instant pre-filled WhatsApp lead generation.
   */
  endpointUrl: string
  enableWhatsAppFallback: boolean
  whatsAppPhone: string
}

export interface QuoteFormData {
  fullName: string
  phoneOrWhatsApp: string
  requirementCategory: FurnitureCategory | 'full_home' | 'other'
  spaceOrRoomType?: string
  approximateTimeline?: string
  customNotes?: string
}
