import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUsers, FiCode, FiCpu } from 'react-icons/fi'
import pic1 from '../assets/vaibhav.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const skills = [
    { name: 'Teamwork', icon: <FiUsers className="h-8 w-8" /> },
    { name: 'Problem Solving', icon: <FiCode className="h-8 w-8" /> },
    { name: 'Creativity', icon: <FiCpu className="h-8 w-8" /> }
  ]

  return (
    <section id="about" className="py-3 bg-secondary/50 dark:bg-dark-light/20">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
              <img
                src={pic1}
                alt="Vaibhav Randad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hidden md:flex">
              <span>2025</span>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              Hello there! I'm Vaibhav Randad
            </motion.h3>
            
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm a passionate Software Developer with a curiosity for solving complex problems through elegant code. My post academic journey has equipped me with strong fundamentals in programming, and software development.
            </motion.p>
            
            <motion.p 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My goal is to leverage technology to create meaningful solutions that make a positive impact. I'm constantly learning and exploring new technologies to expand my skill set.
            </motion.p>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-semibold mb-2">Quick Facts:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Internship- IKSC Knowledge Bridge (2024)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Certifications: Full Stack Java Development (2023-2024)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Hobbies: Programming, Playing cricket, Travelling</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="font-semibold mb-3">Soft Skills:</h4>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center p-3 bg-white dark:bg-dark rounded-lg shadow-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-primary mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About