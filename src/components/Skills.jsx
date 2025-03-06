import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, FiDatabase, FiGithub, FiTool, 
  FiLayout, FiServer, FiTerminal, FiCpu
} from 'react-icons/fi'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const categoryVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  const skillVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200 }
    },
    hover: {
      y: -5,
      rotateZ: 2,
      boxShadow: '0 10px 20px -5px rgba(var(--color-primary), 0.2)'
    }
  }

  const categories = [
    {
      name: 'Backend',
      skills: [
        { name: 'Java', icon: <FiCode /> },
        { name: 'Spring-Boot', icon: <FiCode /> },
        { name: 'J2EE', icon: <FiCode /> },
        { name: 'MySQL', icon: <FiDatabase />},
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: <FiGithub /> },
        { name: 'VS Code', icon: <FiTool /> },
        { name: 'Eclipse', icon: <FiTerminal /> },
        { name: 'Postman', icon: <FiCpu /> }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Next.js', icon: <FiServer /> },
        { name: 'React js', icon: <FiLayout /> },
        { name: 'Javascript', icon:  <FiCode /> },
        { name: 'Html/Css', icon: <FiLayout /> }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group perspective-1000"
              variants={categoryVariants}
              whileHover={{ y: -10 }}
            >
              <div className="h-full p-6 bg-white dark:bg-dark-light rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-primary transition-all"
                      variants={skillVariants}
                      whileHover="hover"
                    >
                      <div className="text-2xl mb-3 text-primary">
                        {skill.icon}
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills