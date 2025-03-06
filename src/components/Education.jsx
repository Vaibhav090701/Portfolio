import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Nagnathappa Halge College Of Engineering',
      period: '2021 - 2024',
      stream:'Mechanical Engineering',
      achievements: [
        'Developed rocker bogie mechanism with remote control',
        'Got free certification course in IT sector'
      ]
    },
    {
      degree: 'High School Diploma',
      institution: 'Government Polytechnic College, Beed',
      period: '2017 - 2020',
      stream:'Mechanical Engineering',
      achievements: [
        'Participated and won Quiz competation',
        'Developed Button Operated Gear Shifting System',
        'Completed an internship at a local automotive showroom.'
      ]
    }
  ]

    const certifications = [
    {
      title: 'Java Full Stack Development',
      issuer: 'Qspide/Jspider',
      date: '2024',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'React js Basic to Advance',
      issuer: 'Udemy',
      date: '2025',
      color: 'from-green-500 to-cyan-600'
    },
    {
      title: 'C++ and Java Begineer course ',
      issuer: 'Udemy',
      date: '2023',
      color: 'from-red-500 to-orange-600'
    },
    // Add more certifications...
  ]


  return (
    <section id="education" className="py-10">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}  
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <p className="text-primary font-medium">{item.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{item.stream}</p>
                
                {/* Key Achievements Section */}
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      <motion.div
        className="max-w-6xl mx-auto mt-24"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
          }
        }}
      >
        <h3 className="text-2xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40,
                  rotateX: -45,
                  scale: 0.8 
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  transition: { 
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              whileHover={{
                y: -10,
                rotateZ: Math.random() > 0.5 ? 2 : -2,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="relative group perspective-1000"
            >
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-300 via-transparent from-transparent to-white rounded-xl" />
              
              {/* Main card */}
              <div className={`bg-gradient-to-br ${cert.color} p-0.5 rounded-xl shadow-2xl h-full`}>
                <div className="bg-gray-900 p-6 rounded-xl h-full flex flex-col">
                  {/* Floating animation */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="flex-1"
                  >
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {cert.title}
                    </h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {cert.date}
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-white/10 w-1 h-1 rounded-full"
                        initial={{
                          x: Math.random() * 100 - 50 + '%',
                          y: Math.random() * 100 - 50 + '%'
                        }}
                        animate={{
                          x: Math.random() * 100 - 50 + '%',
                          y: Math.random() * 100 - 50 + '%',
                          scale: [0, 1, 0],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 4,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
    )
    }

export default Education