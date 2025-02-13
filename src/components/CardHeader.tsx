import { StarIcon } from '@/assets'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    title: string,
    subTitle: string,
    className?: string,
}

const CardHeader = ({ title, subTitle, className }: Props) => {
    return (
        <div className={twMerge("flex flex-col", className)}>
            <div className="inline-flex items-center gap-2">
                <StarIcon className='size-9 text-emerald-300' />
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>

            <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{subTitle}</p>
        </div>
    )
}

export default CardHeader
