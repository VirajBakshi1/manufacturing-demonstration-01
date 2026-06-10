'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Stagger delay in ms */
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

/**
 * Wraps content and animates it into view the first time it
 * enters the viewport (IntersectionObserver based).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hidden = {
    up: 'translate-y-12',
    left: '-translate-x-12',
    right: 'translate-x-12',
    none: '',
  }[direction]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        'transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : clsx('opacity-0', hidden),
        className
      )}
    >
      {children}
    </div>
  )
}
