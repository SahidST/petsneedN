import Link from 'next/link'
import { ReactNode, MouseEvent } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  variant?: 'primary' | 'secondary' | 'icon'
  className?: string
  ariaLabel?: string
  target?: string
  rel?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'transition-all duration-300 focus-visible-ring rounded-lg font-poppins font-semibold'

  const variants = {
    primary: `bg-primary hover:bg-primary-hover text-white px-8 py-3.5 hover:-translate-y-0.5 hover:shadow-hover ${baseStyles}`,
    secondary: `bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 hover:-translate-y-0.5 ${baseStyles}`,
    icon: `w-12 h-12 bg-secondary hover:bg-primary hover:text-white text-text-dark rounded-full flex items-center justify-center hover:scale-110 ${baseStyles}`,
  }

  const classes = `${variants[variant]} ${className}`

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target={target}
          rel={rel}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
