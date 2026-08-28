import React, { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'brass' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'dark-outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      target,
      rel,
      children,
      disabled,
      icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none rounded-[2px]'

    const variants = {
      primary:
        'bg-charcoal-teal text-ivory hover:bg-charcoal-deep active:bg-black shadow-sm border border-charcoal-teal/40 hover:border-brass/50',
      brass:
        'bg-brass text-charcoal-deep hover:bg-brass-light active:bg-brass-dark font-semibold shadow-sm hover:shadow-md transition-shadow',
      secondary:
        'bg-sand text-charcoal-brown hover:bg-sand-dark active:bg-sand-dark/90 border border-sand-border',
      outline:
        'bg-transparent text-charcoal-teal border border-charcoal-teal/30 hover:bg-charcoal-teal/5 hover:border-charcoal-teal active:bg-charcoal-teal/10',
      'dark-outline':
        'bg-transparent text-ivory border border-ivory/30 hover:bg-ivory/10 hover:border-ivory active:bg-ivory/20',
      ghost:
        'bg-transparent text-charcoal-brown hover:text-charcoal-teal hover:bg-charcoal-teal/5 active:bg-charcoal-teal/10',
      whatsapp:
        'bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1caa51] font-semibold shadow-sm hover:shadow-md transition-shadow',
    }

    const sizes = {
      sm: 'text-xs uppercase tracking-wider px-3.5 py-2 gap-1.5 min-h-[36px]',
      md: 'text-xs uppercase tracking-wider px-5 py-3 gap-2 min-h-[44px]',
      lg: 'text-sm uppercase tracking-widest px-7 py-3.5 gap-2.5 min-h-[50px]',
    }

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={disabled}
        >
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </a>
      )
    }

    return (
      <button
        type="button"
        disabled={disabled}
        className={combinedClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
