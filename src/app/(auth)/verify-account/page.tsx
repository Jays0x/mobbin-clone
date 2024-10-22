'use client'
import PrimaryButton from '@/components/button/PrimaryButton'
import TextInput from '@/components/input/TextInput'
import Logo from '@/components/logo/Logo'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center justify-center w-[50%]'>
      <Logo />
      <div className='flex flex-col text-center'>
          <div className='text-center flex flex-col gap-2 justify-center items-center mb-8'>
            <h2>Verify your account</h2>
            <p className='text-[var(--paragraph)] font-saans'>We sent a temporary login code to jaysalimi.devux@gmail.com.
            <Link href='/signup' className='text-[var(--foreground)] hover:border-b hover:border-[var(--foreground)]'> {""} Not you?</Link></p>
          </div>

          <TextInput />

          <Link href='/browse/ios/apps'><PrimaryButton /></Link>

          <div className='mb-12'>
            <p className='text-[var(--paragraph)] flex gap-2 items-center justify-center'>Didn&apos;t receive the code? <strong className='text-[var(--foreground)] cursor-pointer hover:border-b hover:border-[var(--foreground)]' onClick={()=> alert('Code sent successfully')} >Resend</strong></p>
          </div>

      </div>

      
    </div>
  )
}

export default page