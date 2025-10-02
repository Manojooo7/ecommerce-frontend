import { Categories } from "@/components/Categories"
import { FooterCTA } from "@/components/FooterCTA"
import { ProductLists } from "@/components/ProductLists"
import { Button } from "@/components/ui/button"
import { LayoutGrid } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Homepage = async ({searchParams}:{searchParams: Promise<{category: string}>}) => {
  const category = (await searchParams).category
  return (
    <main className='w-full'>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-slate-200/40 min-h-[50vh]">
        <div className="flex flex-col gap-3">
          <p className="text-lg text-gray-400 font-semibold">#Big Fashion Sale</p>
          <div className="">
          <h1 className="text-6xl font-bold text-black">Limited Time Offer!</h1>
          <h1 className="text-6xl font-bold text-black">Up to 50% OFF!</h1>
          </div>
          <p className="text-lg text-gray-400 font-semibold">Redefine Your Fashion</p>
          {/* <Button className="bg-[#FBC23D] text-[#EB5D3C] font-bold text-lg hover:none">Explore</Button> */}
        </div>
        <div className="max-w-3xl flex justify-end items-end">
          <Image
            src={'/hero-img.png'}
            alt="Hero Img"
            width={800}
            height={800}
          />
        </div>
      </div>

      {/* Category */}
{/* 
      <Categories/> */}
      <ProductLists category={category} params="homepage"/>
      <FooterCTA/>
    </main>
  )
}

export default Homepage