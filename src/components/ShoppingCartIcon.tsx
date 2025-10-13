"use client"
import useCartStore from '@/stores/cartStore'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ShoppingCartIcon = () => {

  const {cart, hasHydrated} = useCartStore();

  const totalCartitems = cart.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <Link href={'/cart'} className='relative'>
        <ShoppingCart className='w-4 h-4 text-gray-600'/>
        <span className='w-4 h-4 bg-amber-400 absolute -top-3 -right-3 p-1 text-xs font-medium rounded-full flex justify-center items-center text-gray-600'>{hasHydrated ? totalCartitems : 0}</span>
    </Link>
  )
}
