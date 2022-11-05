import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({ }: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} >
        <div className="flex flex-row items-center">
          <SocialIcon
            fgColor='gray'
            bgColor='transparent'
            url="https://twitter.com/tsudodog" />
          <SocialIcon
            network='linkedin'
            fgColor='gray'
            bgColor='transparent'
            url="https://www.linkedin.com/in/alex-zalewski-836079174/"
          />
        </div>
      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }} >
        <div>
          <SocialIcon
            className='cursor-pointer'
            network="email"
            fgColor='gray'
            bgColor='transparent'
          />
          <div >
            <p className='upperclass hidden md:inline-flex text-sm text-gray-400 '>Get In Touch</p>
          </div>
        </div>
      </motion.div>

    </header>
  )
}

export default Header