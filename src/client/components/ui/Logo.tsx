import React from 'react'
import { cn } from '@shared/utils'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'full' | 'icon'
  showText?: boolean
  className?: string
}

export function Logo({
  size = 'md',
  variant,
  showText,
  className,
  ...props
}: LogoProps) {
  const effectiveVariant = variant || (showText === false ? 'icon' : 'full')

  // Tamanhos proporcionais compensando a margem transparente da imagem 1:1 original
  const sizeConfig = {
    sm: { full: 'w-32 h-10 sm:w-36 sm:h-11', icon: 'w-10 h-10' },
    md: { full: 'w-40 h-12 sm:w-44 sm:h-14', icon: 'w-11 h-11' },
    lg: { full: 'w-48 h-14 sm:w-56 sm:h-16', icon: 'w-12 h-12' },
    xl: { full: 'w-60 h-18 sm:w-72 sm:h-22', icon: 'w-14 h-14' },
    '2xl': { full: 'w-64 h-20 sm:w-80 sm:h-24', icon: 'w-16 h-16' },
  }[size]

  return (
    <div
      className={cn('inline-flex items-center justify-center select-none', className)}
      {...props}
    >
      <div
        className={cn(
          'relative flex items-center justify-center overflow-hidden transition-all duration-300 hover:brightness-110',
          effectiveVariant === 'icon'
            ? cn(sizeConfig.icon, 'rounded-xl')
            : sizeConfig.full
        )}
      >
        <img
          src="/logo.png"
          alt="PixTune"
          className={cn(
            'w-full h-full object-cover drop-shadow-[0_0_15px_rgba(30,215,96,0.3)]',
            effectiveVariant === 'icon'
              ? 'object-[18%_50%] scale-[2.2]'
              : 'object-center scale-[1.15]'
          )}
        />
      </div>
    </div>
  )
}