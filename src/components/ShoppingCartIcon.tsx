"use client"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ShoppingCartIcon = () => {
  return (
    <Link href={'/cart'} className='relative'>
        <ShoppingCart className='w-4 h-4 text-gray-600'/>
        <span className='w-4 h-4 bg-amber-400 absolute -top-3 -right-3 p-1 text-xs font-medium rounded-full flex justify-center items-center text-gray-600'>1</span>
    </Link>
  )
}
