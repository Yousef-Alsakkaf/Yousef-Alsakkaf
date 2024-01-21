import {motion} from 'framer-motion'
import React from 'react'
const animations = {
    initial : {opacity: 0, x: 100},
    animate : {opacity: 1, x: 0},
    exit  : {opacity:0, x: -100 },
}
function AnimatedPage({children}) {
  return (
    <div>
      <motion.div variants={AnimationEffect} initial="initial" animate="animate" exit="exit">
        {children}
      </motion.div>
    </div>
  )
}

export default AnimatedPage
