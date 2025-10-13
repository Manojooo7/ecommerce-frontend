"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowRight, ShoppingCartIcon } from 'lucide-react'
import { PaymentFormInputs, paymentFormSchema } from '@/types'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const PaymentForm = () => {

    const form = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentFormSchema),
        defaultValues: {
            cardHolder: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
        }
    })

    const router = useRouter();

    const handleSubmit = (values: z.infer<typeof paymentFormSchema>) =>{
        console.log("Form Values: ", values);
        // setShippingForm(values)
        // router.push("/cart?step=3", {scroll: false})
    }
  return (
    <div className='flex flex-col w-full gap-8'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=" flex flex-col gap-4">
        <FormField
          control={form.control}
          name="cardHolder"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Card Holder Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input placeholder="11234626713476124" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          /> 
          <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Expiry Date</FormLabel>
              <FormControl>
                <Input placeholder="03/27" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
              <FormItem>
              <FormLabel>CVV</FormLabel>
              <FormControl>
                <Input placeholder="345" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          <div className="flex items-center gap-3">
             <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md"/>
            <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md"/>
            <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md"/>
          </div>

          <Button type='submit' className='w-full'>
            Checkout
            <ShoppingCartIcon/>
          </Button>
          </form>
          </Form>
    </div>
  )
}
