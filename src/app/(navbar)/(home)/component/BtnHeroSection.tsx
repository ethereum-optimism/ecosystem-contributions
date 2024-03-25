'use client'
export default function BtnHeroSection({ text }: { text: string }) {
  const handleClickBtn = () => {
    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className="hidden lg:block -48 border px-8 py-4 bg-[#FF0420] text-white rounded-full  shadow-md hover:opacity-90 transition ease-linear duration-300 hover:bg-white hover:text-[#FF0420] hover:border-[#FF0420]"
      onClick={handleClickBtn}
    >
      <div className=" font-semibold">{text} &darr;</div>
    </button>
  )
}
