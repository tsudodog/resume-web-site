import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import {useForm, SubmitHandler} from "react-hook-form"

type Inputs = {
  name: string;
  email: string
  subject: string 
  message: string
}
type Props = {}

const Contact = (props: Props) => {

  const {register , handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
  const onSubmit : SubmitHandler<Inputs> = (formData) => {

    //TODO: Resume from email
    console.log(formData)
    // window.location.href = `mailto:myEmail@icloud.com?subject=${formData.subject}&`
  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className="page-header">Contact</h3>

      <div className='flex flex-col space-y-10'>
        <motion.h4 
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        className='text-4xl font-semibold text-center' >
          Remember, if it is not {' '}
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="text-green-500/70 underline uppercase font-semibold">testable</motion.span>
          {' '} <motion.span
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay:2}}
            viewport={{ once: true }}>its</motion.span>{' '}
          <motion.span
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 , delay:3}}
            viewport={{ once: true }}
            className="font-mono font-semibold text-red-500">detestable</motion.span>
            <motion.span
                        initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 , delay:3}}
            viewport={{ once: true }}
            >.</motion.span>

        </motion.h4>



        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">

            <PhoneIcon className="text-sky-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl" >+1-555-555-5555</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">

            <EnvelopeIcon className="text-sky-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl" >test@email.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-sky-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl" > 1234 Developer Parkway</p>
          </div>

        </div>
        <form onSubmit={handleSubmit(onSubmit)} 
        className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input className="contact-input" placeholder="Name" type="text"  {...register('name')}/>
            <input className="contact-input" placeholder="Email" type="email" {...register('email')} />
          </div>
          <input className='contact-input' placeholder='Subject' {...register('subject')} />
          <textarea className="contact-input" placeholder='Message' {...register('message')}/>
          <button className="bg-sky-500 py-5 px-10 rounded-md text-black font-bold">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact