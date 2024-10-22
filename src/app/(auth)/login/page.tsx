'use client'

import OutlineButton from '@/components/button/OutlineButton'
import PrimaryButton from '@/components/button/PrimaryButton'
import Email from '@/components/input/Email';
import Logo from '@/components/logo/Logo'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center justify-center w-[50%]'>
      <Logo />
      <div className='flex flex-col text-center w-full'>
          <div className='text-center flex flex-col gap-2 justify-center items-center mb-8'>
            <h2>Welcome back</h2>
          </div>

          <OutlineButton />
          
          <div className="flex items-center justify-between w-full mb-8">
            <hr className="flex-grow border-t border-[var(--border)]" />
            <p className="mx-4 text-[var(--input)]">Or</p>
            <hr className="flex-grow border-t border-[var(--border)]" />
          </div>

          <Email />

          <div className='flex justify-end items-center mb-5'>
            <Link href='/forgot-password' className='hover:border-b hover:border-[var(--foreground)]'>Need help with password?</Link>
          </div>

          <Link href='/browse/ios/apps'><PrimaryButton /></Link>

          <div className='mb-12'>
            <p className='text-[var(--paragraph)] flex gap-2 items-center justify-center'>Don&apos;t have an account? <Link className='text-[var(--foreground)] cursor-pointer hover:border-b hover:border-[var(--foreground)]' href='/signup'>Sign up</Link></p>
          </div>

      </div>

      
    </div>
  )
}

export default page