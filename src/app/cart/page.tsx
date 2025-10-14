"use client"

import { PaymentForm } from "@/components/PaymentForm"
import { ShippingForm } from "@/components/ShippingForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import useCartStore from "@/stores/cartStore"
import { CartItemsType, CartItemType, ShippingFormInputs } from "@/types"
import { ArrowRight, Trash, Trash2 } from "lucide-react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

const steps = [
  {
    id: 1,
    title: "Shopping Cart"
  },
  {
    id: 2,
    title: "Shipping Details"
  },
  {
    id: 3,
    title: "Payment Methode"
  },
]

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  const [shipppingForm, setShippingForm] = useState<ShippingFormInputs>();

  const {cart: cartItems, removeFromCart} = useCartStore()
  // const [paymentForm, setPaymentForm] = useState(false)

  const subTotal:number = parseInt(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2));
  let discount = 10;
  let shippingFees = 10;
  let total = subTotal - discount + shippingFees;

  const handleRemoveCartItems = (item:CartItemType)=>{
    removeFromCart(item)
    toast.success(`${item.name} is successfully removed from cart`)
  }
  return (
    <div className="flex flex-col gap-8 items-center justify-between mt-12 p-3 md:px-10 lg:px-16">
      {/* Title */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map(step =>(
          <div className={`flex items-center gap-2 border-b-2 pb-4 cursor-pointer ${step.id === activeStep ? "border-gray-800" : "border-gray-300"}`} key={step.id}>
            <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-300"}`}>{step.id}</div>
            <p className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}>{step.title}</p>
          </div>
        ))}
      </div>
      {/* Step Details */}

      <div className="w-full flex flex-col lg:flex-row justify-center gap-16">
        
        <Card className="w-full lg:w-7/12 shadow-lg">
          <CardHeader>
            <CardTitle className="font-semibold">{activeStep === 1 ? ("Products") : activeStep === 2 ? "Shipping Details" : "Payment Details"}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            {activeStep === 1 ? (cartItems.map(item => (
              <div className="flex items-center justify-between" key={item.id + item.selectedColor + item.selectedSize}>
                <div className="w-[90%] flex gap-8">
                  <Image
                    src={item.images[item.selectedColor]}
                    alt="Cart Item"
                    width={80}
                    height={80}
                  />

                  <div className="flex flex-col gap-2">
                    <h3>{item.name}</h3>
                    <p className="text-gray-400 text-xs">Qunatity: {item.quantity}</p>
                    <p className="text-gray-400 text-xs">Size: {item.selectedSize.toLocaleUpperCase()}</p>
                    <p className="text-gray-400 text-xs">Color: {item.selectedColor.toLocaleUpperCase()}</p>
                    <p className="mt-2 font-bold text-sm">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="w-[10%]">
                  <Button onClick={()=>handleRemoveCartItems(item)} className="rounded-full bg-red-200 hover:bg-red-300" size={"icon"}>
                    <Trash2 className="text-red-400"/>
                  </Button>
                </div>
              </div>
            ))) : activeStep === 2 ? (<ShippingForm setShippingForm={setShippingForm}/>) : activeStep === 3 && shipppingForm ? (<PaymentForm/>) :(<p>
              Please fill the shiiping details to continue
            </p>)}
            
          </CardContent>
        </Card>

         <Card className="w-full h-max lg:w-5/12 shadow-lg">
          <CardHeader>
            <CardTitle className="font-semibold">Cart Details</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 grow">
            <div className="flex w-full justify-between items-center">
              <p className="text-gray-400">Subtotal</p>
              <h3>$ {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity, 0
                ).toFixed(2)}</h3>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-gray-400">Discount ({discount}%)</p>
              <h3 className="text-red-600">-${discount * subTotal / 100}</h3>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-gray-400">Shipping Fee</p>
              <h3>${shippingFees}</h3>
            </div>

            <div className="h-[1px] bg-gray-300"/>

            <div className="flex w-full justify-between items-center">
              <p className="font-bold">Total</p>
              <h3 className="text-lg">${total}</h3>
            </div>

            {activeStep === 1 && <Button 
            className="w-full cursor-pointer"
            onClick={()=> router.push("/cart?step=2", {scroll: false})}
            >
              Continue
              <ArrowRight/>
            </Button>}
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default CartPage