import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-gray-800 mt-16 p-8 flex gap-8 md:gap-0 flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-white'>
      <div className="flex flex-col gap-4 text-gray-400 items-center md:items-start">
        <Link href={'./'} className="flex items-center gap-1">
            <Image
              src={'/logo.png'}
              alt='Logo'
              width={40}
              height={40}
            />
            <p className='hidden md:block text-lg font-medium tracking-wider'>TRENDLAMA.</p>
        </Link>
        <p>© Trendlama</p>
        <p>All rights received</p>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <p>Links</p>
        <Link className='text-gray-400 text-sm' href={'/'}>Homepage</Link>
        <Link className='text-gray-400 text-sm' href={'/contact'}>Contact</Link>
        <Link className='text-gray-400 text-sm' href={'/terms-of-services'}>Terms of Services</Link>
        <Link className='text-gray-400 text-sm' href={'/privacy-policy'}>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <p>Products</p>
        <Link className='text-gray-400 text-sm' href={'/products'}>All Products</Link>
        <Link className='text-gray-400 text-sm' href={'/products'}>New Arrivals</Link>
        <Link className='text-gray-400 text-sm' href={'/products'}>Best Sales</Link>
        <Link className='text-gray-400 text-sm' href={'/products'}>Sales</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <p>Links</p>
        <Link className='text-gray-400 text-sm' href={'/'}>Company</Link>
        <Link className='text-gray-400 text-sm' href={'/contact'}>Contact</Link>
        <Link className='text-gray-400 text-sm' href={'/terms-of-services'}>Blog</Link>
        <Link className='text-gray-400 text-sm' href={'/privacy-policy'}>Affiliate Programe</Link>
      </div>
    </div>
  )
}
