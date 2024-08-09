'use client'

import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/constants'
import * as rs from 'react-scroll'
import React from 'react'

const Nav = () => {
    return (
        <nav className={cn('flex items-center gap-8')}>
            {
                navLinks.map((link, index) => (
                    <rs.Link
                        key={index}
                        to={link.href}
                        activeClass={'active'}
                        spy
                        smooth
                        offset={-100}
                        duration={300}
                        className='cursor-pointer font-medium transition-all duration-75 [&.active]:text-accent'
                    >
                        {link.title}
                    </rs.Link>
                ))
            }
        </nav>
    )
}
export default Nav
