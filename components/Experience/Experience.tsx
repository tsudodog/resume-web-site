import React from 'react'
import ExperienceCard from '../ExperienceCard'

const Experience = () => {
    return (
        <div className="h-screen flex relative overflow-hidden 
                flex-col text-left md:flex-row max-w-full px-10
                 justify-evenly mx-auto items-center">
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experiences</h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>


        </div>
    )
}

export default Experience