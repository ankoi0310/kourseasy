'use client'

import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer>
      <div className={'bg-primary text-background py-6 flex items-stretch justify-center gap-1'}>
        <p className={'flex items-center'}>
          2023 {year > 2023 ? ` - ${year}` : ''}
        </p>
        <Copyright />
        <p className={'flex items-center'}>
          Code With Koi
        </p>
      </div>
    </footer>
  )
}
export default Footer
