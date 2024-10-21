import React from 'react'

function Email() {
  return (
    <div>
        <form action="input">
            <input type="email" placeholder='Enter email address' className='py-3 bg-[var(--secondary)] font-saans w-full px-5 rounded-md mb-5 placeholder:text-[var(--input)] placeholder:text-[14px]'/>
        </form>
    </div>
  )
}

export default Email