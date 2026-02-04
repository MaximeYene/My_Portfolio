'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function AnimatedButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseStyles = 'px-8 py-3 font-semibold rounded-lg transition-all shadow-lg'
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-accent text-accent-foreground hover:shadow-xl',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground',
  }

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variantStyles[variant]} ${className} inline-flex items-center justify-center`}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
