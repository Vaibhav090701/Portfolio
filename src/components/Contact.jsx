import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Message received! Expect a response within 24 hours.')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/Vaibhav090701' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/vaibhav-randad-09july01/' },
    { name: 'Instagram', icon: <FiInstagram />, url: 'https://www.instagram.com/vaibhav_randad/' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:randadvaibhav@gmail.com' }
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/50 dark:bg-dark-light/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary w-1 h-1 rounded-full"
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity
            }}
          />
        ))}
      </div>

      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title gradient-text"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          Let's Collaborate
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Social Connections */}
          <motion.div
            className="relative perspective-1000"
            variants={itemVariants}
          >
            <div className="p-8 bg-white dark:bg-dark-light rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Connect Directly
              </h3>
              
              <p className="mb-8 text-gray-600 dark:text-gray-400">
                Whether you have a project in mind or just want to chat tech, my inbox is always open. Let's create something extraordinary together!
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 space-x-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                    whileHover={{ 
                      y: -5,
                      rotateZ: Math.random() > 0.5 ? 1 : -1,
                      boxShadow: '0 10px 20px -5px rgba(var(--color-primary), 0.1)'
                    }}
                  >
                    <span className="text-2xl text-primary group-hover:text-primary-dark transition-colors">
                      {link.icon}
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative perspective-1000"
            variants={itemVariants}
          >
            <div className="p-8 bg-white dark:bg-dark-light rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'message'].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <label htmlFor={field} className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === 'message' ? (
                      <motion.textarea
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        whileFocus={{ 
                          scale: 1.02,
                          boxShadow: '0 0 0 2px rgba(var(--color-primary), 0.2)'
                        }}
                      />
                    ) : (
                      <motion.input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        whileFocus={{ 
                          scale: 1.02,
                          boxShadow: '0 0 0 2px rgba(var(--color-primary), 0.2)'
                        }}
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Launch Message'}</span>
                </motion.button>

                <AnimatePresence>
                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-200 rounded-lg text-sm border border-green-200 dark:border-green-800/50"
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact