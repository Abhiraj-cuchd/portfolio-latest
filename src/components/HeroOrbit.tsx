import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    children: React.ReactNode,
    size: number,
    rotation: number,
    orbitDuration?: number,
    shouldOrbit?: boolean,
    spinDuration?: number,
    shouldSpin?: boolean,
}

const HeroOrbit = ({ children, size, rotation, spinDuration, shouldSpin = false, orbitDuration, shouldOrbit = false }: Props) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
            <div className={twMerge(shouldOrbit === true && "animate-spin")} style={{
                animationDuration: `${orbitDuration}s`
            }}>

                <div className='flex items-start justify-start' style={{ height: `${size}px`, width: `${size}px`, transform: `rotate(${rotation}deg)` }}>
                    <div className={twMerge(shouldSpin === true && "animate-spin")} style={{
                        animationDuration: `${spinDuration}s`
                    }}>
                        <div className="inline-flex" style={{ transform: `rotate(${rotation * -1}deg)` }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroOrbit
