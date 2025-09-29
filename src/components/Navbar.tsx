
// import { Home } from 'lucide'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SearchBar } from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center border-gray-200 border-b-2 pb-4'>
      <Link href={'./'} className="flex items-center gap-1">
          <Image
            src={'/logo.png'}
            alt='Logo'
            width={40}
            height={40}
          />
          <p className='hidden md:block text-lg font-medium tracking-wider'>TRENDLAMA.</p>
      </Link>
      <div className="flex items-center gap-6">
        {/* <Home/> */}
        <SearchBar/>
        <Link href={'./'}>
          <Home className='w-4 h-4 text-gray-600'/>
        </Link>
        <Link href={'./'}>
          <Bell className='w-4 h-4 text-gray-600' />
        </Link>
        <Link href={'./'}>
          <ShoppingCart className='w-4 h-4 text-gray-600' />
        </Link>
        <Link href={'/login'} className='text-gray-500'>
          Sign in
        </Link>
      </div>
    </div>
  )
}
