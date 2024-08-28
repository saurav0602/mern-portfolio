import React from 'react'
import home from '../assets/home.png';
import { motion } from "framer-motion";
const Container= (delay) => ({
    hidden: {x: -100, opacity:0 },
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5 ,delay: delay}
    }

});

const Home = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb:35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                variants={Container(0)}
                initial='hidden'
                animate='visible'
                 className='pb-8 text-4xl font-thin tracking-tight sm:text-5xl lg:text-6xl lg:mt-16'>
                    Saurav Kumar
                </motion.h1>
                <motion.span 
                 variants={Container(0.5)}
                 initial='hidden'
                 animate='visible'
                 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl'>
                    Full Stack Developer
                </motion.span>
                <motion.p 
                 variants={Container(1)}
                 initial='hidden'
                 animate='visible'
                className='my-4 max-w-xl py-4 font-light tracking-tighter lg:text-xl'>
                I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as back-end technologies like Node.js, Express.js, and MongoDB. 

                </motion.p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img
                initial={{ x: 100,opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}}
                className='w-3/4 sm:w-2/3 lg:w-1/2'
                src={home} alt="home"/>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
