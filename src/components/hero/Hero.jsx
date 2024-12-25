import React from 'react'
import './hero.scss';
import {motion} from 'framer-motion';

const textVariants = {
    initial:{
        x: -500,
        opacity: 0 
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            straggerChildren: 0.1
        }
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            straggerChildren: 0.1
        }
    }
}

const Hero = () => {
    return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants = {textVariants} initial="initial" animate="animate">
            <motion.h2 initial="initial" animate="animate" variants = {textVariants}>Abdallah Obeidat</motion.h2>
            <motion.h1 initial="initial" animate="animate" variants = {textVariants}>Software Engineer and Quality Engineer</motion.h1>
            <motion.div initial="initial" animate="animate" variants = {textVariants} className="buttons">
                <motion.button initial="initial" animate="animate" variants = {textVariants}>See the Latest Works</motion.button>
                <motion.button initial="initial" animate="animate" variants = {textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img animate="scrollButton" variants = {textVariants} src='/scroll.png' alt='scroll image' />
        </motion.div>

        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
             Java Spring-boot Node JS React MySQL PostgreSQL   
        </motion.div>

        {/* <div className="imageContainer">
            <img src='/hero.png' alt='hero' />
        </div> */}
        </div>
        
    </div>
  )
}

export default Hero