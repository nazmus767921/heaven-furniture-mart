import { CollectionItem, FurnitureCategory } from '../types'

export const collectionsData: CollectionItem[] = [
  // Living Room
  {
    id: 'living-royal-sofa',
    title: 'The Royal Sovereign Salon Suite',
    category: 'living',
    categoryLabel: 'Living Room',
    tagline: 'Hand-carved gold leaf detailing with royal botanical jacquard upholstery',
    description:
      'Individually sculpted from seasoned solid mahogany, featuring traditional hand-applied antique gold leafing and high-resilience ergonomic feather-down blend cushions.',
    image: '/images/luxury-sofa-1.webp',
    materials: ['Seasoned Solid Mahogany', 'Gold Leaf Inlay', 'Imported Jacquard Tapestry', 'High-Density Foam'],
    dimensions: 'Custom tailored to room floorplan',
    isFeatured: true,
    features: [
      'Master artisan hand-carved floral crests',
      'Double-tempered sinuous spring suspension',
      'Dual-texture contrast velvet side panels',
      'Matching armchairs and carved coffee table available',
    ],
  },
  {
    id: 'living-vitrine-cabinet',
    title: 'Palazzo Arch Vitrine & Showcase',
    category: 'living',
    categoryLabel: 'Living Room',
    tagline: 'Tri-panel curved glass curio with integrated warm illumination',
    description:
      'A centerpiece display cabinet featuring beveled curved glass doors, mirrored backdrop, illuminated glass shelving, and classical neoclassical crown moldings.',
    image: '/images/luxury-living-room-2.webp',
    materials: ['Solid Teak Wood Core', 'Champagne Pearl Lacquer', 'Tempered Beveled Glass', 'Solid Brass Hardware'],
    dimensions: 'W 210cm × D 55cm × H 230cm (Customizable)',
    isFeatured: true,
    features: [
      'Recessed concealed LED warm spotlights',
      'Heavy-gauge tempered 8mm float glass shelves',
      'Precision soft-close German hinges',
      'Hand-cast brass escutcheon pulls',
    ],
  },
  {
    id: 'living-prestige-lounge',
    title: 'Aethelgard Neoclassical Lounge',
    category: 'living',
    categoryLabel: 'Living Room',
    tagline: 'Warm earth-toned living composition with architectural symmetry',
    description:
      'Designed for refined family reception rooms with custom proportions, solid timber framing, and stain-resistant woven linen textures.',
    image: '/images/luxury-living-room-3.webp',
    materials: ['Solid Teak / Mahogany', 'Belgian Woven Linen', 'Muted Brass Accents'],
    dimensions: 'Custom scaled to room specifications',
    isFeatured: false,
    features: [
      'Reinforced kiln-dried internal hardwood structure',
      'Custom stain-resistant nano-treated upholstery',
      'Bespoke center & side table pairings',
    ],
  },

  // Bedroom
  {
    id: 'bedroom-chittagong-teak',
    title: 'Imperial Solid Wood Master Bed Suite',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    tagline: 'Kiln-dried seasoned Chittagong teak with traditional mortise & tenon joinery',
    description:
      'A stately king bed anchored by deep chocolate wood grains, precision geometric headboard paneling, and an optional matching 4-door wardrobe with antique brass crown relief.',
    image: '/images/bedroom-1.webp',
    materials: ['Seasoned Chittagong Teak', 'Hand-Rubbed Matte Polyurethane', 'Solid Brass Hardware'],
    dimensions: 'King Size (78" × 72") / Super King (84" × 78") / Bespoke Size',
    isFeatured: true,
    features: [
      'Zero-creak engineered heavy timber frame',
      'Integrated under-bed hidden pneumatic storage (optional)',
      'Matching nightstands with velvet-lined jewelry drawers',
      'Wardrobe with customizable modular interior compartments',
    ],
  },
  {
    id: 'bedroom-velvet-regency',
    title: 'The Grand Regency Tufted Suite',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    tagline: 'Deep vertical fluted velvet headboard with mirror-accented canopy columns',
    description:
      'An opulent statement master bedroom set crafted with champagne-gold lacquered frames and plush acoustic velvet upholstery.',
    image: '/images/bedroom-2.webp',
    materials: ['High-Grade Velvet', 'Hardwood Subframe', 'Mirrored Glass Trims', 'Gold Leaf Accents'],
    dimensions: 'Custom built to ceiling & wall clearances',
    isFeatured: false,
    features: [
      'Floor-to-ceiling headboard customization',
      'Integrated LED halo mood backlighting',
      'Matching dressing console with vanity mirror',
    ],
  },
  {
    id: 'bedroom-bespoke-wardrobe',
    title: 'Bespoke Architectural Wardrobe Suite',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    tagline: 'Custom floor-to-ceiling storage with integrated dressing niche',
    description:
      'Fully personalized interior storage architecture engineered for wardrobe organization, watch winders, accessory drawers, and ambient warm light sensors.',
    image: '/images/luxury-wardrobe-1.webp',
    materials: ['Marine Grade HDF & Natural Teak Veneer', 'Satin Brass Rails', 'Plexi Smoked Glass'],
    dimensions: 'Engineered per client wall dimensions',
    isFeatured: false,
    features: [
      'Motion-activated warm 2700K wardrobe illumination',
      'Soft-closing hydraulic sliding and bi-fold doors',
      'Custom shoe galleries and lockable safe niche',
    ],
  },

  // Dining
  {
    id: 'dining-calacatta-marble',
    title: 'The Medici Polished Marble Dining Suite',
    category: 'dining',
    categoryLabel: 'Dining Room',
    tagline: 'Seamless Italian Calacatta composite marble top with cabriole teak legs',
    description:
      'An eight-seater dining centerpiece pairing an opulent curved natural marble tabletop with hand-carved mahogany legs and studded oxblood leather dining chairs.',
    image: '/images/dining-1.webp',
    materials: ['Natural Calacatta Composite Marble', 'Solid Seasoned Mahogany', 'Top-Grain Studded Leather'],
    dimensions: 'L 240cm × W 110cm × H 76cm (6 to 12 seats available)',
    isFeatured: true,
    features: [
      'Stain-sealed waterproof, heat-resistant marble surface',
      'Carved Baroque cabriole table base',
      'High-back ergonomic lumbar support chairs with brass studs',
      'Matching marble-top credenza and buffet server',
    ],
  },
  {
    id: 'dining-palace-imperial',
    title: 'The Royal Versailles Dining Ensemble',
    category: 'dining',
    categoryLabel: 'Dining Room',
    tagline: 'Ivory lacquer finish with gold-accented high-back dining armchairs',
    description:
      'Evoking European royal banquets, this dining set is finished in gleaming cream lacquer with sculpted gold borders and damask upholstered seating.',
    image: '/images/luxury-dining-3.webp',
    materials: ['High-Density Solid Hardwood', 'Multi-Coat Piano Gloss Lacquer', 'Gold Leaf Accents'],
    dimensions: 'Customizable for 6, 8, 10, or 12 diners',
    isFeatured: false,
    features: [
      'Gloss scratch-resistant tabletop sealant',
      'Crown-topped high back dining chairs',
      'Seamless matching display vitrines and chandeliers available',
    ],
  },
  {
    id: 'dining-bespoke-chairs',
    title: 'Artisan Dining Armchairs & Host Chairs',
    category: 'dining',
    categoryLabel: 'Dining Room',
    tagline: 'Ergonomic sculptured timber chairs with custom upholstery patterns',
    description:
      'Handmade dining chairs designed for hours of comfortable entertaining, available in custom leather, damask, velvet, or linen.',
    image: '/images/chairs-1.webp',
    materials: ['Solid Teak Wood', 'High-Resilience Cold-Cured Foam', 'Bespoke Designer Textiles'],
    dimensions: 'Standard & Wide Host Chair variants',
    isFeatured: false,
    features: [
      'Reinforced corner-blocked timber construction',
      'Custom seat height matching client dining table',
      'Hand-applied protective clear topcoat',
    ],
  },

  // Executive Office & Study
  {
    id: 'office-director-suite',
    title: 'The President Executive Director Desk',
    category: 'office',
    categoryLabel: 'Office & Study',
    tagline: 'Architectural minimalism with powder-coated steel and natural wood veneers',
    description:
      'Designed for business leaders and modern penthouses. Combines clean structural lines, concealed wire conduits, integrated return cabinets, and executive ergonomics.',
    image: '/images/modern-workspace.webp',
    materials: ['Natural Oak / Teak Veneers', 'Matte Black Powder-Coated Steel', 'Solid Core Acoustic Paneling'],
    dimensions: 'Desk: W 200cm × D 90cm × H 75cm + Credenza W 160cm',
    isFeatured: true,
    features: [
      'Concealed brush cable ports and power management tray',
      'Pneumatic soft-close file drawers and locking credenza',
      'Anti-fingerprint matte durable work surface',
      'Matching director acoustic credenza and display bookshelf',
    ],
  },
  {
    id: 'office-executive-corner',
    title: 'The Summit Executive L-Suite',
    category: 'office',
    categoryLabel: 'Office & Study',
    tagline: 'Spacious dual-surface executive workstation with expansive storage',
    description:
      'Engineered for maximum productivity, presenting a commanding executive profile with acoustic privacy screens and natural grain warmth.',
    image: '/images/modern-workspace-2.webp',
    materials: ['Engineered Hardwood', 'Anodized Aluminum Trim', 'Custom Veneer Layup'],
    dimensions: 'Custom configured to room orientation (Left/Right return)',
    isFeatured: false,
    features: [
      'Modular credenza with printer tray and filing cabinet',
      'Integrated wireless charging pad options',
      'Heavy-duty scratch-resistant polyurethane finish',
    ],
  },
  {
    id: 'office-boardroom-table',
    title: 'The Chancellor Conference & Boardroom Table',
    category: 'office',
    categoryLabel: 'Office & Study',
    tagline: 'Commanding conference table for 8 to 20 executive seats',
    description:
      'A statement conference table with integrated audio-visual ports, microphone wiring channels, and high-impact natural grain bookmatched veneers.',
    image: '/images/modern-workspace-4.webp',
    materials: ['Solid Core Boardroom Top', 'Structural Steel Sub-frame', 'Concealed AV Hatch'],
    dimensions: 'L 300cm to 600cm × W 140cm',
    isFeatured: false,
    features: [
      'Hidden pop-up HDMI/Type-C/Power modules',
      'Beveled chamfered edge for wrist comfort',
      'High-grade executive swivel chairs available in matching leather',
    ],
  },
]

export const categoryTabs: { key: FurnitureCategory | 'all'; label: string; count: number }[] = [
  { key: 'all', label: 'All Collections', count: 12 },
  { key: 'living', label: 'Living Room', count: 3 },
  { key: 'bedroom', label: 'Royal Bedroom', count: 3 },
  { key: 'dining', label: 'Grand Dining', count: 3 },
  { key: 'office', label: 'Executive Suites', count: 3 },
]
