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

  // Animation Variants for Fade and Hover
  const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const skillHover = {
    hover: { scale: 1.2, rotate: 10, boxShadow: '0 15px 40px rgba(0, 255, 255, 0.3)', cursor: 'pointer' }
  }

  // Categories with Skills
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#111] via-[#1f1f1f] to-[#222] text-white dark:bg-[#111]">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title text-5xl font-extrabold text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          My Skills
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-[#303030] via-[#444] to-[#555] shadow-lg transform hover:scale-105 transition-all"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-accent">{category.name}</h3>
              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card flex flex-col items-center justify-center p-6 bg-[#333] rounded-full shadow-xl transition-all"
                    variants={skillHover}
                    whileHover="hover"
                    style={{ height: '120px', width: '120px' }}
                  >
                    <div className="icon mb-3 text-3xl text-accent">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills;
