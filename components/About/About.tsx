import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const About = (props: Props) => {
    return (
        <motion.div 
        
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className="flex flex-col relative h-screen  text-center
                        md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
                        mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px]
                         text-gray-500 text-2xl">
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}

                whileInView={{
                    x: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 1.2
                }}
                viewport={{ once: true }}
                src="https://pbs.twimg.com/media/DvdEX5EVsAA0vOT?format=jpg&name=small"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
            md:rounded-lg md:w-64 md:h-100 xl:w-[500px] xl:h-[600px]'
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Vitae congue eu consequat ac felis donec.
                    Eget sit amet tellus cras adipiscing enim eu.
                    Fames ac turpis egestas sed tempus urna. 
                    Sagittis nisl rhoncus mattis rhoncus urna neque. 
                    Massa id neque aliquam vestibulum. 
                    Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.
                     Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. 
                      Sit amet consectetur adipiscing elit ut aliquam purus. Elementum facilisis leo vel fringilla est. Neque laoreet suspendisse interdum consectetur libero id. Parturient montes nascetur ridiculus mus. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Dui faucibus in ornare quam viverra orci sagittis. Interdum consectetur libero id faucibus nisl tincidunt eget. Magna ac placerat vestibulum lectus mauris. Malesuada bibendum arcu vitae elementum. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.</p>
            </div>

        </motion.div>
    )
}

export default About