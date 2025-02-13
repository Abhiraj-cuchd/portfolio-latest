import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";
import { StarIcon, SparkIcon, ArrowDownIcon, GrainImage, memojiImage } from "@/assets";
export const HeroSection = () => {
  return <div className="py-32 md:py-48 lg:py-52 relative z-0 overflow-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-10" style={{
        backgroundImage: `url(${GrainImage.src})`,
      }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration={30} shouldSpin={true} spinDuration={8}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit shouldSpin={true} spinDuration={8} size={620} rotation={-0} shouldOrbit={true} orbitDuration={33}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit shouldSpin={true} spinDuration={8} shouldOrbit={true} orbitDuration={36} size={630} rotation={108}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit shouldSpin={true} spinDuration={8} size={480} rotation={148} shouldOrbit={true} orbitDuration={39}>
        <SparkIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit shouldSpin={true} spinDuration={8} size={780} rotation={-28} shouldOrbit={true} orbitDuration={42}>
        <SparkIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit shouldSpin={true} spinDuration={8} size={780} rotation={-208} shouldOrbit={true} orbitDuration={45}>
        <SparkIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit shouldSpin={true} spinDuration={8} size={780} rotation={-268} shouldOrbit={true} orbitDuration={48}>
        <SparkIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit shouldSpin={true} spinDuration={8} size={780} rotation={-20} shouldOrbit={true} orbitDuration={50}>
        <div className="size-8 rounded-full text-emerald-300/20" />
      </HeroOrbit>
    </div>
    <div className="container">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} alt="person" className="size-[100px]" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Hello There, Abhiraj here</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl text-center mt-4 tracking-wide md:text-5xl">Delivering Quality Software Solutions</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">I specialize in building Quality Software Solutions for Startups and Enterprises. Let&apos;s disscuss your next project</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 pointer-events-auto">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work</span>
          <ArrowDownIcon className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer">
          <span>📜</span>
          <span className="font-semibold">Download Resume</span>
        </button>
      </div>
    </div>
  </div>
};
