import { ProductLists } from '@/components/ProductLists'
import React from 'react'

const ProductPage = async({searchParams}:{searchParams: Promise<{category: string}>}) => {

    const category = (await searchParams).category
  return (
    <div>
        <ProductLists category={category} params='products'/>
    </div>
  )
}

export default ProductPage