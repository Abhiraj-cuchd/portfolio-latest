import React from 'react'

type Props = {
    eyebrowText: string;
    title: string;
    description: string;
}

const SectionHeader = ({ eyebrowText, title, description }: Props) => {
    return (
        <>
            <div className="flex justify-center items-center mt-3">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrowText}</p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{title}</h2>
            <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">{description}</p>
        </>
    )
}

export default SectionHeader
