import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function OutlineButton() {
  return (
    <div>
        <button onClick={() => alert('No Google link yet')} className='mb-8 w-full flex flex-row justify-center items-center gap-3 bg-transparent border border-[var(--border)] py-3 text-[var(--foreground)] rounded-full hover:bg-[var(--hover)]'>
            <FcGoogle className='w-[24px] h-[24px]'/>
            Continue with Google
          </button>
    </div>
  )
}

export default OutlineButton