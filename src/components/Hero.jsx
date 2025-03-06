import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-blue-500/5 dark:from-primary-dark/20 dark:to-blue-700/10 z-0"
        style={{ y, opacity }}
      ></motion.div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span>Vaibhav Randad</span> | <span className="gradient-text">Aspiring Software Developer</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Turning coffee into code
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary inline-flex items-center"
            >
              Explore My Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm mb-1">Scroll to explore</span>
          <FiArrowDown className="animate-bounce-slow h-6 w-6" />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero