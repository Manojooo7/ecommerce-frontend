"use client"
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export const Filters = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const filterName = usePathname()
    const selectedFilter = searchParams.get("category");
    
    const handleFilterChnage = (value: string | null) =>{
        const params = new URLSearchParams(searchParams);
        params.set("sort", value || "all")
        router.push(`${filterName}?${params.toString()}`, {scroll: false})
    }

  return (
     <Select onValueChange={(value) => handleFilterChnage(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select sorting option</SelectLabel>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
