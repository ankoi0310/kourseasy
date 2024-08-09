'use client'

import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { ArrowUpCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-scroll'

const ScrollToTop = () => {
  const scrolled = useScroll(40)
  
  return (
    <Link
      to={'home'}
      spy
      smooth
      duration={500}
      title={'Scroll to top'}
    >
      <ArrowUpCircle
        className={cn(
          'cursor-pointer text-foreground/50 hover:text-foreground right-8 bottom-8 z-20 w-10 h-10',
          scrolled ? 'fixed' : 'hidden',
        )}
      />
    </Link>
  )
}
export default ScrollToTop
