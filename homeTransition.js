import { motion } from 'framer-motion'



const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 150, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const spring = {
    type: "spring",
    // stiffness: 200,
    // damping: 10,
    duration: 2,
  };
  

const homeTransition = (OgComponent) => {
    return () => (
        <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >

          <div className="load-logo-wrapper">
            <motion.div className="item" variants={item} transition={spring}>
                <img src="../logos/WG-logo.png" alt="" className="w-14  sm:w-20 cursor-pointer max-w-none"/>
            </motion.div>

          </div>

      </motion.ul>
    )
}

export default homeTransition;