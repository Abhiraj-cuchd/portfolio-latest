import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { ApiIcon, AwsIcon, bookImage, DockerIcon, GithubIcon, NextjsIcon, NodejsIcon, ReactIcon, RedisIcon, SocketIcon, StarIcon, MapImage, SmileMemoji } from "@/assets";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
const toolboxItems = [
  {
    title: 'Next.js',
    iconType: NextjsIcon
  },
  {
    title: 'MongoDB | MySQL | Redis',
    iconType: RedisIcon
  },
  {
    title: 'Node.js | Express.js',
    iconType: NodejsIcon
  },
  {
    title: 'Socket.io',
    iconType: SocketIcon
  },
  {
    title: 'Microservices',
    iconType: ApiIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'Git | Github | GitLab',
    iconType: GithubIcon
  },
  {
    title: 'Docker',
    iconType: DockerIcon
  },
  {
    title: 'AWS',
    iconType: AwsIcon
  }
];

const hobbies = [
  {
    title: 'Reading',
    emoji: '📖',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Blogging',
    emoji: '✍️',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: '35%',
    top: '40%'
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Geopolitics',
    emoji: '🌍',
    left: '45%',
    top: '70%'
  }
]

export const AboutSection = () => {
  return <div className="py-20">
    <div className="container">
      <SectionHeader eyebrowText="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do and what inspires me" />
      <div className="mt-20 flex flex-col gap-8">
        <div className="md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-8">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" subTitle="Explore the books shaping my perspectives" />
            <div className="w-40 mx-auto mt-4">
              <Image src={bookImage} alt="bookCover" />
            </div>
          </Card>
          <Card className="h-[320px] mt-6 md:mt-0 md:col-span-3 lg:col-span-2">
            <CardHeader className="" title="My Skills" subTitle="Explore the tools I use to craft exceptional digital experiences" />
            <ToolboxItems className="mt-6" toolboxItems={toolboxItems} />
            <ToolboxItems className="mt-2" itemsWrapperClassName="-translate-x-1/2" toolboxItems={toolboxItems} />
          </Card>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the Code" subTitle="Explore my interests and hobbies beyound my digital realm" className="px-6 py-6" />
            <div className="relative flex-1">
              {hobbies.map((hobby, index) => (
                <div className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  key={index}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image className="h-full w-full object-cover" src={MapImage} alt="map" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image className="size-20" src={SmileMemoji} alt="smile-memoji" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>;
};
