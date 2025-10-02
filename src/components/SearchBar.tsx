import { Search } from 'lucide-react'
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

export const SearchBar = () => {
  return (
    <div className='hidden md:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
      <div className="border-r-2 border-gray-200">
      <Select>
        <SelectTrigger className="w-[180px] outline-none border-none shadow-none py-0">
          <SelectValue placeholder="All Category" />
        </SelectTrigger>
        <SelectContent className=''>
          <SelectGroup>
            <SelectLabel>Select</SelectLabel>
            <SelectItem value="all-category">All Category</SelectItem>
            <SelectItem value="men">Men</SelectItem>
            <SelectItem value="women">Women</SelectItem>
            <SelectItem value="topware">Topware</SelectItem>
            <SelectItem value="bottom-ware">Bottom Ware</SelectItem>
            <SelectItem value="winter">Winter</SelectItem>
            <SelectItem value="summer">Summer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      </div>
        <Search className='w-4 h-4 text-gray-500'/>
        <input className='text-sm outline-0 w-full' placeholder='search...'/>
    </div>
  )
}
