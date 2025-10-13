"use client"
import { ProductType } from '@/types'
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import useCartStore from '@/stores/cartStore'
import { toast } from 'sonner'

export const ProductCard = ({product}: {product: ProductType}) => {
    const [productTypes, setProductTypes] = useState({
        size: product.sizes[0],
        color: product.colors[0]
    })

    const handleProductType = ({type, value}: {type: 'color' | 'size', value: string}) =>{
        setProductTypes((prev) => ({
            ...prev,
            [type]: value
        }))
    }

    const {addToCart} = useCartStore()

    const handleAddToCart = () =>{
        addToCart({
            ...product,
            quantity: 1,
            selectedColor: productTypes.color,
            selectedSize: productTypes.size,
        })

        toast.success(`${product.name || "Product"} successfully added to cart`)
    }

    // console.log("ProductType: ", productTypes);
    
  return (
    <Card className='hover:shadow-xl hover:shadow-gray-100 border-1 border-gray-200 shadow-none rounded-lg overflow-hidden p-0'>
        <CardContent className='p-0'>
            {/* Image */}
            <Link href={`/products/${product.id}`}>
            <div className="relative aspect-[4/5]">
                <Image
                    src={product.images[productTypes.color]}
                    alt={product.name}
                    fill
                    className='object-cover hover:scale-105 transition-all duration-300'
                />
            </div>
            </Link>

            {/*  */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className='font-medium'>{product.name}</h1>
                <p className='text-sm text-gray-400'>{product.shortDescription}</p>
                <div className="flex items-center w-full gap-6 text-xs">
                    <div className="flex flex-col gap-1">
                        {/* <span className='text-gray-500'>Sizes</span> */}
                        <Select onValueChange={(value)=>handleProductType({type: 'size', value: value})}>
                            <SelectTrigger className='text-xs'>
                                <SelectValue placeholder="Sizes" />
                            </SelectTrigger>
                            <SelectContent className='text-xs'>
                                {product.sizes.map((size, i)=>(
                                    <SelectItem value={size} key={i}>{size.toLocaleUpperCase()}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex gap-3 justify-end">
                        {product.colors.map((color, i)=>(
                            <div key={color} className={`border-[1px] cursor-pointer bg-gray-100 rounded-full p-1 ${productTypes.color === color ? 'border-black' : 'border-gray-400'} `}
                            onClick={() => handleProductType({type: 'color', value: color})}
                            >
                                <div className={`w-[24px] h-[24px] rounded-full hover:scale-110 transition-all duration-300 ${productTypes.color === color ? 'scale-110' : ''}`} style={{backgroundColor: color}}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full justify-between items-center">
                    <h1 className='text-xl font-bold'>${product.price.toFixed(2)}</h1>
                    <Button className='text-xs font-medium' onClick={handleAddToCart}>
                        <ShoppingCart className='w-4 h-4'/>
                        Add to cart
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}
