export interface NavItem {
  label: string
  href: string
  isCta?: boolean
}

export const navigationItems: NavItem[] = [
  { label: 'Studio', href: '#hero' },
  { label: 'Collections', href: '#collections' },
  { label: 'Bespoke Atelier', href: '#bespoke' },
  { label: 'Craftsmanship', href: '#why-us' },
  { label: 'Agrabad Showroom', href: '#showroom' },
]

export const footerQuickLinks = [
  { label: 'Living Room Suites', href: '#collections' },
  { label: 'Royal Bedroom Sets', href: '#collections' },
  { label: 'Grand Dining Collections', href: '#collections' },
  { label: 'Executive Workspace', href: '#collections' },
  { label: 'Custom Bespoke Journey', href: '#bespoke' },
  { label: 'Visit Showroom', href: '#showroom' },
]
