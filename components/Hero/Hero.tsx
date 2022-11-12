import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './../BackgroundCircles'
type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "ReactJS",
            "Spring Boot",
            "Postgresql"
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div
            className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden" >
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://avatars.githubusercontent.com/u/29548050?v=4" alt="" />
            <div className='z-20'>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-20">Senior Full-stack Engineer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                    <span>{text}</span>
                    <Cursor cursorColor='#00e100' />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experiences">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero