
// import { Home } from 'lucide'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SearchBar } from './SearchBar'
import { Bell, Home, ShoppingCart, Smartphone } from 'lucide-react'
import { ShoppingCartIcon } from './ShoppingCartIcon'

export const Navbar = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between items-center border-gray-200 border-b-2 md:px-8 px-4 py-2">
        <Link href={'./'} className="flex items-center gap-1">
          <Smartphone className='w-4 h-4 text-gray-400'/>
          <p className='hidden md:block text-sm font-medium text-gray-400'>Download Mobile App</p>
      </Link>
      <div className="flex items-center gap-6">
        <Link href={'/mumbai'} className='text-gray-400'>Mumbai</Link>
        <Link href={'/kolkata'} className='text-gray-400'>Kolkata</Link>
        <Link href={'/delhi'} className='text-gray-400'>Delhi</Link>
        <Link href={'/promo'} className='border-r-2 pr-3 border-gray-400 text-gray-400'>Promo</Link>
        <Link href={'/login'} className='border-r-2 pr-3 border-gray-400'>Sign up</Link>
        <Link href={'/login'}>Login</Link>
      </div>
      </div>
    <div className='flex w-full justify-between items-center border-gray-200 border-b-2 py-3 md:px-8 px-4 gap-4'>
      <Link href={'./'} className="flex items-center gap-1">
          <Image
            src={'/logo.png'}
            alt='Logo'
            width={40}
            height={40}
          />
          <p className='hidden md:block text-lg font-medium tracking-wider'>TRENDLAMA.</p>
      </Link>
      <div className="w-full flex-2">
        <SearchBar/>

      </div>
      <div className="flex items-center gap-6">
        {/* <Home/> */}
        <Link href={'./'}>
          <Bell className='w-4 h-4 text-gray-600' />
        </Link>
        {/* <Link href={'./'}>
          <ShoppingCart className='w-4 h-4 text-gray-600' />
        </Link> */}
        <ShoppingCartIcon/>
      </div>
    </div>
    </div>
  )
}
