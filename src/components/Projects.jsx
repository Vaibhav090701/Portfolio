import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import project1 from '../assets/project1.jpg';
import project3 from '../assets/project3.png';


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const projects = [
    {
      title: 'Food Ordering System',
      description: 'Built a food ordering system which helps you to order food online.',
      longDescription: 'The system allows users to browse restaurants, view menus, add items to their cart, and place orders seamlessly. Key features include user authentication, and an admin panel for restaurant management',
      image: project1,
      tech: ['Java', 'Spring Boot', 'React js', 'MySQL'],
      github: 'https://github.com/Vaibhav090701/Online-Food-Ordering-System-Frontend-',
      demo: 'https://demo.com'
    },
    {
      title: 'Movie library management',
      description: 'Developed a web-app to search movies and created list of your favourite movies using public Api.',
      longDescription: ' This project allows users to browse, search, and manage a library of movies. Features include a responsive UI, Authentication, and some movie information.',
      image: 'https://i.redd.it/zjgs096khv591.jpg',
      tech: ['React', 'Tailwind CSS'],
      github: 'https://github.com/Vaibhav090701/Movie-Library-application',
      demo: 'https://movie-library-application.vercel.app/'
    },
    {
      title: 'Expense Management System',
      description: 'Created an standalone application where user can manage and track their expense records.',
      longDescription: 'This system helps users track and manage their expenses efficiently. Features include user authentication, expense categorization, and detailed transaction history',
      image: project3,
      tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    // {
    //   title: 'E-commerce Prototype',
    //   description: 'Designed and implemented a prototype for an e-commerce platform with basic shopping features.',
    //   longDescription: 'This e-commerce prototype demonstrates core online shopping functionality including product browsing, search filtering, cart management, and a simulated checkout process. The project focuses on creating a responsive, user-friendly interface that works across devices. While it doesn\'t process actual payments, it showcases the full user journey from product discovery to purchase confirmation.',
    //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    //   tech: ['HTML/CSS', 'JavaScript', 'Node.js'],
    //   github: 'https://github.com',
    //   demo: 'https://demo.com'
    // }
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

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-10">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card group cursor-pointer"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.2 }
              }}
              onClick={() => handleProjectClick(project)}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary dark:bg-dark text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-white dark:bg-dark-light rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={closeModal}
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.longDescription}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary dark:bg-dark text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 flex justify-center items-center"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-all duration-300 flex-1 flex justify-center items-center"
                >
                  <FiGithub className="mr-2" /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects