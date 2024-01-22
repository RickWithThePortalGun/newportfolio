import React from 'react'

const Contact = () => {
  return (
    <div className='bg-transparent mt-[200px] mb-[200px]  z-50 flex flex-row justify-center items-center'>
        <div className='bg-gradient-conic py-10 pl-10 rounded-3xl w-fit h-full flex flex-row max-sm:flex-col gap-8'>
<div >
    <p className='text-[30px] font-semibold text-white mb-6'>Contact Me</p>
    <div className='text-[15px]'>
        <p className='font-semibold text-white'>For Employment I prefer:</p>
        <p className='text-white font-light items-center'>{`• `}Product Company, SASS, Crypto Industry, AI, Healthcare and many more.</p>
        <p className='text-white font-light'>{`• `}Frontend Developer, Web Developer, Mobile Developer</p>
        <p className='text-white font-light'>{`• `}Node.js, React:Nextjs, Express, Django, React Native</p>
    </div>
</div>
<div className='flex flex-row items-end gap-4'>
    <div className='border-[1px] rounded-full px-2 py-1'>
        <p className="text-white">Resume </p>
    </div>
    <div className='flex flex-col gap-4'>
        <span>mail</span>
        <span>LinkedIn</span>
        <span>Telegram</span>
        <span>Discord</span>
    </div>
</div>
        </div>

    </div>
  )
}

export default Contact