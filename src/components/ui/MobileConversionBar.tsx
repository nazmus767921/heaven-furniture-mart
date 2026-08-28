import React from 'react'
import { MessageSquare, Sparkles } from 'lucide-react'
import { siteConfig } from '../../config/site'

export const MobileConversionBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-sand-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto mb-1.5 px-1">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-brown-muted font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Agrabad Studio Open Today</span>
        </div>
        <span className="text-[10px] text-brass-dark font-medium">10 AM – 9 PM</span>
      </div>

      <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        <a
          href="#quote"
          className="inline-flex items-center justify-center gap-1.5 bg-charcoal-teal text-ivory hover:bg-charcoal-deep active:bg-black text-xs font-semibold uppercase tracking-wider py-2.5 px-3 rounded-[2px] border border-charcoal-teal/60 text-center"
        >
          <Sparkles className="w-3.5 h-3.5 text-brass" />
          <span>Request Quote</span>
        </a>

        <a
          href={siteConfig.contact.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1caa51] text-xs font-semibold uppercase tracking-wider py-2.5 px-3 rounded-[2px] text-center shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </aside>
  )
}
