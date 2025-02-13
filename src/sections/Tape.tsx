import { StarIcon } from "@/assets";

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Responsive',
  'Scalable',
  'User Friendly',
  'Mainatanable',
  'Search Optimized',
  'Usable',
  'Reliable'
]

export const TapeSection = () => {
  return <div className='py-16 lg:py-24'>
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
          {[...new Array(2)].fill(0).map((_, indx) => (
            <>
              {words.map((word, index) => (
                <div className="inline-flex items-center gap-4" key={index}>
                  <span className='text-gray-900 uppercase font-extrabold text-sm ml-2'>{word}</span>
                  <StarIcon className='size-6 text-gray-900 -rotate-12' />
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  </div>;
};
