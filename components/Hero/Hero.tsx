import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Test", "other string ", "something else"],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div>
            <h1><span>{text}</span><Cursor cursorColor='#00e100' />
            </h1>
        </div>
    )
}

export default Hero