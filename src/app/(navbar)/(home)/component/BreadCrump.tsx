import HomeIcon from '@/public/icon/HomeIcon'

export default function BreadCrump({}: {}) {
  return (
    <div className="hidden lg:flex flex-wrap items-center gap-2 border-b pb-4 font-inter">
      <div className="flex gap-2 items-center">
        <HomeIcon />
        <h6 className="text-sm font-medium text-gray-700">Home</h6>
      </div>
      <div className="text-sm font-medium text-gray-600">/</div>
      <h6 className="text-sm font-medium text-gray-700">RetroPGF</h6>
      <div className="text-sm font-medium text-gray-600">/</div>
      <h6 className="text-sm font-medium text-gray-500">
        Explore Project Idea
      </h6>
    </div>
  )
}
