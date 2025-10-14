"use client"
import { ProductInteraction } from "@/components/ProductInteraction"
import { ProductType } from "@/types"
import Image from "next/image"
import { useState } from "react"


const product:ProductType = {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  }
const CartDetailsPage = () => {

    const [productTypes, setProductTypes] = useState({
        size: product.sizes[0],
        color: product.colors[0],
        quantity: 1
    })

  return (
    <div className="flex justify-center w-full align-middle mt-10 p-3 md:px-10 lg:px-16">
        <div className="flex gap-7 md:flex-row flex-col w-full p-3">
            <div className="w-full">
                <Image alt={product.name} src={product.images[productTypes.color]} width={400} height={400}/>
            </div>
            <div className="flex flex-col gap-4 w-full p-3">
                <h1 className="text-2xl font-medium">{product.name}</h1>
                <p className="text-sm">{product.description}</p>
                <h1 className="text-2xl font-bold">${product.price.toFixed(2)}</h1>
                <ProductInteraction product={product}/>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md"/>
                        <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md"/>
                        <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md"/>
                    </div>

                    <p className="text-gray-400">Buy clicking on the buy this item button you will  be redirect to the payment gateway page where you will be asked to fill your shipping details and complete the payment</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartDetailsPage