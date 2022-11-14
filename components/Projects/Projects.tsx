import React from 'react'
import {motion} from "framer-motion"
type Props = {}

const Projects = (props: Props) => {

    const projects = ["world", "foo bar" , "hello", "something",]
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        viewport={{once: true}}
        
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="page-header">Projects</h3>

                <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
                snap-mandatory z-20'>
           
                    {projects.map((project, i) => (
                        <div key={i} className='w-screen flex-shrink-0 snap-center felx flex-col space-y-5 items-center justify-center pd-20 md:p-44 h-screen'    >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"/>

                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className="text-4xl font-semibold text-center">
                                    <span className="underline decoration-sky-500/40">Case Study {i + 1} of {projects.length} </span>{" "}
                                </h4>

                                <p className='text-lg text-center md:text-left'>Lorem ipsum dol salor</p>
                            </div>
                        </div>))}

                </div>


            <div className='w-full absolute top-[30%] bg-sky-500/10 left-0 h-[500px] -skew-y-12'>

            </div>
        </motion.div>
    )
}

export default Projects