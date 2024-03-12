import Image from 'next/image'
import BtnHeroSection from './BtnHeroSection'

export default function HeroSection() {
  return (
    <div className="justify-center grid grid-cols-1 md:grid-cols-8 items-center gap-8 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 ">
      {/* lg:max-w-[30rem] xl:max-w-[36rem] */}
      <div className="flex justify-center grid-cols-1 animate-slidedown duration-1000 w-full md:hidden">
        <Image
          src="img/sunny.svg"
          alt="retro hero icon"
          width={200}
          height={200}
          className="animate-none"
        />
      </div>
      <div className="flex flex-col text-center md:col-span-5 md:text-left animate-slideleft duration-200">
        <h6 className="text-slate-900 text-5xl font-semibold font-rubik ">
          Welcome to Builder Ideas
        </h6>
        <p className="text-slate-600 text-sm font-normal mx-8 md:mx-0 my-6 ">
          Join the Optimism Collective: Shape the Future, Discover
          Opportunities, Get Involved, and Make an Impact Today. The Optimism
          Collective ecosystem has various pathways for you to be potentially
          funded or rewarded for the work that you do.
        </p>
        <div className="mt-2">
          <BtnHeroSection />
        </div>
      </div>
      <div className="hidden md:col-span-3  md:flex md:flex-row md:justify-center animate-slideright duration-1000">
        <Image
          src="img/sunny.svg"
          alt="retro hero icon"
          width={250}
          height={250}
          className="animate-none"
        />
      </div>
    </div>
  )
}
