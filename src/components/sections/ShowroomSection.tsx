import React from 'react'
import { MapPin, Phone, Clock, Mail, ExternalLink, Award, Navigation } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { brandTimelineData } from '../../data/timeline'
import { Button } from '../ui/Button'

export const ShowroomSection: React.FC = () => {
  return (
    <section
      id="showroom"
      aria-label="Agrabad Showroom & Brand Heritage"
      className="py-20 md:py-28 bg-ivory border-t border-sand-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sand/80 border border-sand-border text-xs sm:text-sm uppercase tracking-[0.18em] text-charcoal-brown font-semibold mb-3">
            <MapPin className="w-4 h-4 text-brass" />
            <span>Physical Showroom Presence</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-teal leading-tight mb-4">
            Visit Our Flagship Studio on <br />
            <span className="italic font-medium">Agrabad Access Road.</span>
          </h2>

          <p className="text-base sm:text-lg text-brown-muted leading-relaxed font-light">
            We invite you to experience the tactile luxury of hand-rubbed timber grains, solid brass hardware, and ergonomic seating in our curated Chattogram showroom.
          </p>
        </div>

        {/* Showroom Cards & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Showroom Profile Card */}
          <div className="lg:col-span-6 bg-charcoal-teal text-ivory p-8 sm:p-10 border border-charcoal-border shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-charcoal-border pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-brass font-bold block mb-1">
                    Flagship Destination
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                    Chattogram Showroom
                  </h3>
                </div>
                <div className="w-11 h-11 bg-charcoal-deep border border-charcoal-border flex items-center justify-center text-brass">
                  <Navigation className="w-5 h-5" />
                </div>
              </div>

              {/* Location List */}
              <div className="space-y-4 text-sm sm:text-base text-ivory/85">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ivory block text-base font-semibold">Opposite of RAK Ceramics</strong>
                    <span className="text-ivory/80">Agrabad Access Road, Chattogram, Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ivory block text-base font-semibold">{siteConfig.showroomHours.days}</strong>
                    <span className="text-ivory/80">{siteConfig.showroomHours.hours}</span>
                    <span className="block text-xs sm:text-sm text-brass mt-0.5 font-medium">{siteConfig.showroomHours.note}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ivory block text-base font-semibold">Direct Phone & WhatsApp</strong>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-ivory/90 hover:text-brass transition-colors">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ivory block text-base font-semibold">Email Inquiries</strong>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-ivory/90 hover:text-brass transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-8 mt-6 border-t border-charcoal-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="brass"
                size="md"
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
              >
                Open in Google Maps
              </Button>

              <Button
                variant="dark-outline"
                size="md"
                href={siteConfig.contact.whatsAppUrl}
                target="_blank"
              >
                Message via WhatsApp
              </Button>
            </div>
          </div>

          {/* Showroom Imagery Showcase Card */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative overflow-hidden border border-sand-border shadow-lg bg-charcoal-deep flex-1 group">
              <img
                src="/images/brand-fb-cover.png"
                alt="Heaven Furniture Mart Showroom Banner and collections"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 min-h-[260px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory">
                <span className="text-xs uppercase tracking-wider text-brass font-bold block mb-1">
                  Curated Showroom Staging
                </span>
                <p className="text-base font-medium text-ivory">
                  Complete Living, Dining & Bedroom Ensembles
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden border border-sand-border aspect-16/10 bg-charcoal-deep">
                <img
                  src="/images/bedroom-1.jpg"
                  alt="Solid teak master bedroom display"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden border border-sand-border aspect-16/10 bg-charcoal-deep">
                <img
                  src="/images/modern-workspace.jpg"
                  alt="Modern executive suite display"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Milestone Timeline */}
        <div className="bg-sand/30 border border-sand-border p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-brass" />
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-teal">
              Brand Milestones & Proven Heritage
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {brandTimelineData.map((item, idx) => (
              <div key={idx} className="relative pl-4 md:pl-0 md:pt-4 border-l-2 md:border-l-0 md:border-t-2 border-sand-dark">
                <span className="font-mono text-base font-bold text-brass block mb-1">
                  {item.year}
                </span>
                <h4 className="font-serif text-base font-semibold text-charcoal-teal mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-brass-dark mb-1">
                  {item.highlight}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-brown/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
