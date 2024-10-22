'use client'
import React from 'react'
import myApps from './data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MyApps() {

const pathname = usePathname();

  return (

    <div className='container flex justify-start items-center gap-5'>
        {
            myApps?.map((app) => (
                <div key={app?.id}>
                    <Link href={app?.link} className={pathname === app?.link ? 'border-b-2 border-white pb-2' : 'text-white/70 hover:text-white'}>{app?.title}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default MyApps