import React from 'react'
import TechIcon from './TechIcon'
import { twMerge } from 'tailwind-merge'

type Props = {
    toolboxItems: { title: string, iconType: React.ElementType }[],
    className?: string,
    itemsWrapperClassName?: string,
    animateLeft?: boolean, // New prop to control animation direction
}

const ToolboxItems = ({ toolboxItems, className, itemsWrapperClassName, animateLeft = false }: Props) => {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden", className)}>
            <div className={twMerge(
                "flex flex-none py-0.5 gap-6 pr-6",
                animateLeft ? "animate-move-left-toolbox" : "animate-move-right-toolbox",
                itemsWrapperClassName
            )}>
                {[...toolboxItems, ...toolboxItems].map((item, index) => (
                    <div className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg" key={index}>
                        <TechIcon component={item.iconType} />
                        <span className="font-semibold">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToolboxItems
