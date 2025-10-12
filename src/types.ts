import z from "zod"

export type ProductType = {
    id: string | number,
    name: string,
    shortDescription: string,
    description: string,
    price: number,
    sizes: string[],
    colors: string[],
    images: Record<string, string>
}


export type ProductsType = ProductType[]

export type CartItemType = ProductType & {

    quantity : number,
    selectedColor: string,
    selectedSize: string
}

export type CartItemsType = CartItemType []

export const shippingFormSchema = z.object({
    name: z.string().min(2, {error: "Name should be minimum 2 characters"}).max(70, {error: "Name cant't be grater the 70 characters"}),
    email: z.email({error: "Email is required"}),
    phone: z.string()
    .min(7, "Phone number must be 7-13 digits")
    .max(13,"Phone number must be 7-13 digits")
    .regex(/^\d+$/, "Phone number must contains numbers only"),
    address: z.string().min(3, "Address is reuired"),
    city: z.string().min(1, "City is required"),
    zipcode: z.string().min(2, "Zip code is required").regex(/^\d+$/, "Zip code contains numbers only")
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format!"
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;