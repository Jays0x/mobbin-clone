'use client'
import React from 'react'
import Logo from '../logo/Logo'
import Link from 'next/link'
import NavData from './data'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname();

  return (
    <div className='bg-[var(--background)] py-3'>
      <div className='flex items-center gap-8 container sticky '>
        <Logo />

        <div className='flex items-center gap-4'>
          {
            NavData?.map((nav) => (
              <div key={nav?.id}>
                <Link 
                  href={nav?.link} 
                  className={pathname.startsWith(nav?.link) ? 'text-white' : 'text-white/70 hover:text-white'}
                >
                  {nav?.title}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
