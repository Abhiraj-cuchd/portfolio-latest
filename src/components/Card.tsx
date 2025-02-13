import React, { ComponentPropsWithoutRef } from 'react';
import GrainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';

const Card = ({ className, children, ...other }: ComponentPropsWithoutRef<"div">) => {
    return (
        <div {...other} className={twMerge("bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none p-6", className)} >
            <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: `url(${GrainImage.src})` }}></div>
            {children}
        </div>
    )
}

export default Card
