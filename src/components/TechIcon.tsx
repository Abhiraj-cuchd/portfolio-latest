import React from 'react'

type Props = {
    component: React.ElementType
}

const TechIcon = ({ component }: Props) => {
    const Component = component;
    return (
        <>
            <Component
                fill="white"
                className="size-10 fill-[url(#tech-icon-gradient)]"
            />
            <svg className='size-0 absolute'>
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor='rgb(110 231 183)' />
                    <stop offset="0%" stopColor='rgb(56 189 248)' />
                </linearGradient>
            </svg>
        </>
    )
}

export default TechIcon
