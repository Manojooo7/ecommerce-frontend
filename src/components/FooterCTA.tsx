import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export const FooterCTA = () => {
  return (
    <div className='h-[40vh] relative mt-16 p-0 flex justify-center items-center overflow-hidden bg-gray-400'>
        <Image
            src={'https://images.unsplash.com/photo-1630904959919-a1a5498edafd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            alt='FOOTER CTA'
            width={2000}
            height={800}
            className='object-cover z-10'
        />
        <div className="w-full h-full absolute flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)] top-0 left-0 z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                Discover Our Latest Collection
            </h1>
            <Button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-opacity-90 transition-all">
                Shop Now
            </Button>
        </div>
    </div>
  )
}
