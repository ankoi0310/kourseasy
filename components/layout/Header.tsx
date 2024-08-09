import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'
import Logo from '@/components/layout/Logo'
import Nav from '@/components/layout/Nav'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className={cn(
      'py-2 md:py-3 xl:py-6 fixed top-0 w-full z-[1000] transition-all duration-75',
     'bg-background backdrop-blur-xl shadow-xl',
    )}>
      <div className={'container mx-auto flex justify-between items-center'}>
        <Link href={'/'}>
          <Logo />
        </Link>

        <div className='hidden lg:flex items-center gap-8'>
          <Nav />

          {/* Login button */}
          <Button className='bg-accent'>
            Đăng nhập
          </Button>
        </div>

        {/* Mobile nav */}
      </div>
    </header>
  )
}
export default Header
