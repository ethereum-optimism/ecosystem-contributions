"use client"
import Link from "next/link"
import { MarkDownData } from "../../../(home)/component/Home"
import HomeIcon from "@/public/icon/Home"
import { useRouter } from 'next/navigation'

export default function BreadCrump({
  content
}:{
  content: MarkDownData
})  {
  const router = useRouter()

return (

      <div className="hidden lg:flex flex-wrap items-center gap-4 font-inter ">
          
          <Link href="/#project" className="flex gap-2 items-center ">
            <HomeIcon/>
            <h6 className="text-sm font-medium text-gray-700 hover:underline">Home</h6>
          </Link>
        
          <div className="text-sm font-medium text-gray-600">/</div>
          
          <h6 className="text-sm font-medium text-gray-500">{content.title}</h6>

      </div>

    )

}
