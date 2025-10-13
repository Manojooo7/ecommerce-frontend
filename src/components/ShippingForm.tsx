import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { ShippingFormInputs, shippingFormSchema } from '@/types'
import { useRouter } from 'next/navigation'

export const ShippingForm = ({setShippingForm}:{setShippingForm:(data: ShippingFormInputs) => void}) => {

    const form = useForm<ShippingFormInputs>({
        resolver: zodResolver(shippingFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipcode: ''
        }
    })

    const router = useRouter();

    const handleSubmit = (values: z.infer<typeof shippingFormSchema>) =>{
        console.log("Form Values: ", values);
        setShippingForm(values)
        router.push("/cart?step=3", {scroll: false})
    }
  return (
    <div className='flex flex-col w-full gap-8'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=" flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          /> 
          <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+91 9999999999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Your Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
              <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Mumbai" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          /> 
          <FormField
          control={form.control}
          name="zipcode"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="421002" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          <Button type='submit' className='w-full'>
            Continue
            <ArrowRight/>
          </Button>
          </form>
          </Form>
    </div>
  )
}
