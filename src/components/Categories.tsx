"use client"
import { LayoutGrid } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import React from "react"

const categories = [
  { name: "Tshirt", image: "/products/1g.png", href: "tshirt" },
  { name: "Shirts", image: "/products/12gr.png", href: "shirt" },
  { name: "Hoodies", image: "/products/5bl.png", href: "hoodie" },
  { name: "Sneakers", image: "/products/6w.png", href: "sneaker" },
  { name: "Denims", image: "/products/8b.png", href: "denim" },
  { name: "Kurtas", image: "/products/9gr.png", href: "kurta" },
  { name: "Jeans", image: "/products/10gr.png", href: "jeans" },
  { name: "Ethinic Wear", image: "/products/11gr.png", href: "ethinic" },
  { name: "All Category", image: null, href: "all", isIcon: true },
]

export const Categories = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname()
    const selectedCategory = searchParams.get("category");
    const handleCategoryChange = (value: string | null) =>{

        const params = new URLSearchParams(searchParams);
        params.set("category", value || "all")
        router.push(`${pathName}?${params.toString()}`, {scroll: false})
    }
    // console.log(selectedCategory);
    
  return (
    <div className="flex flex-wrap w-full justify-center py-16 gap-8 items-center"
        
    >
      {categories.map((cat, index) => (
        <div
            key={index}
            onClick={()=>handleCategoryChange(cat.href)}
            className="cursor-pointer"
        >
          <div className="flex flex-col gap-3 justify-center items-center group">
            {cat.isIcon ? (
              <div className="flex justify-center items-center rounded-full w-28 h-28 bg-[#F9F9F9] transition-transform duration-300 transform group-hover:scale-110">
                <LayoutGrid className="w-16 h-16 text-gray-400" />
              </div>
            ) : (
              <img
                src={cat.image || ""}
                alt={cat.name}
                className={`rounded-full w-28 h-28 object-contain bg-[#F9F9F9] ${cat.href === selectedCategory && 'border-2 border-amber-400'} hover:scale-105 transition-all duration-300`}
              />
            )}
            <p className={`text-lg ${cat.href === selectedCategory ? 'text-amber-400' : 'text-gray-500'}`}>{cat.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
