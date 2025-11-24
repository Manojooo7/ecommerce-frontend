"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Minus, Plus, ShoppingCartIcon } from 'lucide-react'
import useCartStore from '@/stores/cartStore';
import { toast } from 'sonner';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ProductType } from "@/types"
import { Input } from './ui/input';

export const ProductInteraction = ({
    product,
    selectedColor,
    selectedSize
    }:{
        product: ProductType,
        selectedColor: string,
        selectedSize: string
    }) => {

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const [quantity, setQuantity] =useState(1)

    // const [productTypes, setProductTypes] = useState({
    //     size: product.sizes[0],
    //     color: product.colors[0],
    //     quantity: 1
    // })

    const handleProductType = ({type, value}: {type: string, value: string}) =>{

        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value)
        router.push(`${pathName}?${params.toString()}`, {scroll: false})
    }

    const handleQuantityChange = (type: "increment" | "decrement") =>{
        if(type === "increment"){
            setQuantity(prev => prev+1)
        }else{
            setQuantity(prev => prev-1)
        }
    }

    const {addToCart} = useCartStore()

        const handleAddToCart = () =>{
        addToCart({
            ...product,
            quantity: quantity,
            selectedColor: selectedColor,
            selectedSize: selectedSize,
        })

        toast.success(`${product.name || "Product"} successfully added to cart`)
    }
  return (
    <div className='flex flex-col gap-4'>
        <div className="flex flex-col">
            <p className="text-gray-400">Sizes</p>
            <div className="flex items-center gap-2 mt-3">
                {product.sizes.map((s, i) => (
                    <div 
                        className={`w-10 h-10 p-2 flex justify-center align-middle border-gray-200  ${selectedSize === s ? 'bg-foreground text-background' : ''} border-2 text-sm cursor-pointer`}
                        key={i}
                        onClick={() => handleProductType({type: 'size', value: s})}
                    >
                        {s.toLocaleUpperCase()}
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col">
            <p className="text-gray-400">Colors</p>
            <div className="flex items-center gap-2 mt-3">
                {product.colors.map(c => (
                    <div 
                        className={`w-10 h-10 p-2 border-gray-200 border-2 cursor-pointer`} 
                        style={{backgroundColor:c}} 
                        key={c} 

                        onClick={() => handleProductType({type: 'color', value: c})}
                    />
                ))}
            </div>
        </div>

        <div className="flex flex-col">
            <p className="text-gray-400">Quantity</p>

            <div className="flex gap-3 items-center w-1/4 mt-3">
                <Button 
                size={"icon"} 
                onClick={() => handleQuantityChange("decrement")}
                disabled={quantity <= 1}
                >
                    <Minus/>
                </Button>

                <Input className="text-center" value={quantity} min={1} onChange={(e)=> setQuantity(parseInt(e.target.value))} disabled={quantity <= 1} />

                <Button size={"icon"} onClick={() => handleQuantityChange("increment")}>
                    <Plus/>
                </Button>
            </div>

        </div>
        <div className="flex flex-col gap-3">
            <Button className="w-full" onClick={handleAddToCart}>
                <Plus/>
                Add To Cart
            </Button>
            <Button className="w-full">
                <ShoppingCartIcon/>
                Buy This Item
            </Button>
        </div>
    </div>
  )
}
