import React from 'react'

function TextInput() {
  return (
    <div>
         <form action="input">
            <input type="text" placeholder='Enter code sent' className='py-3 bg-[var(--secondary)] font-saans w-full px-5 rounded-md mb-5 placeholder:text-[var(--input)] placeholder:text-[14px]'/>
        </form>
    </div>
  )
}

export default TextInput