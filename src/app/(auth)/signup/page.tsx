'use client'

import Logo from '@/components/logo/Logo'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Email from '@/components/input/Email';


import AirBnb from '@/public/airbnb-Logo.png'
import Duolingo from '@/public/duolingo.svg'
import OutlineButton from '@/components/button/OutlineButton';
import PrimaryButton from '@/components/button/PrimaryButton';

function page() {
  return (
    <div className='flex flex-col items-center justify-center w-[50%]'>
      <Logo />
      <div className='flex flex-col text-center'>
          <div className='text-center flex flex-col gap-2 justify-center items-center mb-8'>
            <h2>Create your free account</h2>
            <p className='text-[var(--paragraph)] font-saans'>Create your free account to search or filter through 300,000+ screens. No credit card required.</p>
          </div>

          <OutlineButton />

          <div className="flex items-center justify-between w-full mb-8">
            <hr className="flex-grow border-t border-[var(--border)]" />
            <p className="mx-4 text-[var(--input)]">Or</p>
            <hr className="flex-grow border-t border-[var(--border)]" />
          </div>

          <Email />

          <Link href='/verify-account'>
            <PrimaryButton />
          </Link>

          <div className='mb-8'>
            <p className='text-[var(--paragraph)]'>By continuing, you agree to Mobbin&apos; <strong><Link href='#' className='underline'>Terms of Service</Link></strong> and  <strong><Link href='#' className='underline'>Privacy Policy.</Link></strong></p>
          </div>

          <div className='mb-12'>
            <p className='text-[var(--paragraph)] flex gap-2 items-center justify-center'>Already have an account? <Link href='/login' className='text-[var(--foreground)]'>Log in</Link></p>
          </div>

          <div>
            <p>Trusted by teams at</p>
            <div className='flex justify-center items-center gap-3'>
              <Image src={AirBnb} alt='Duo' width={100} height={50}/>
              <Image src={Duolingo} alt='Air' width={100} height={50}/>
            </div>
          </div>

      </div>
    </div>
  )
}

export default page