import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { aiStartupLandingPage, ArrowUpRightIcon, CheckCircleIcon, darkSaasLandingPage, lightSaasLandingPage } from "@/assets";

const portfolioProjects = [
  {
    company: "Gemlay Software Solutions",
    year: "2024",
    title: "IT Services Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://gemlaysoft.netlify.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Gemlay Jewels Pvt. Ltd",
    year: "2024",
    title: "Ecommerce Website",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://www.gemlay.com/",
    image: lightSaasLandingPage,
  },
  {
    company: "Gemlay Software Solutions",
    year: "2024",
    title: "Gold Trading Software",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://gemlaybullion.com/",
    image: aiStartupLandingPage,
  },
  {
    company: "Grad Analytics Inc.",
    year: "2022",
    title: "Company Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://gradanalytics.netlify.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Freelance Client",
    year: "2022",
    title: "Project Management Software",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://thekryptoverse.netlify.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Freelance Client",
    year: "2022",
    title: "Portfolio Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://akansharajkhowa.netlify.app/",
    image: aiStartupLandingPage,
  },

];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrowText="Real-World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital Experiences" />
      <div className="flex flex-col mt-10 gap-14 md:mt-20">
        {portfolioProjects.map((project, index) => (
          <Card className={`px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky`} style={{
            top: `calc(64px + ${index * 30}px)`
          }} key={index}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project?.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/20 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className='size-5 md:size-6' />
                      <span >{result.title}</span>
                    </li>
                  ))}
                </ul>
                <Link href={project.link} target="__blank">
                  <button className="bg-white text-gray-900 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <ArrowUpRightIcon className='size-4' />
                    <span>Visit Live Site</span>
                  </button>
                </Link>
              </div>
              <div className="relative">
                <Image className="mt-8 -mb-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title} />
              </div>

            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
