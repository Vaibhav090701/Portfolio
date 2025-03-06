import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

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
      setSubmitMessage('Thanks for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1500)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub className="h-5 w-5" />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <FiLinkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    { name: 'Instagram', icon: <FiInstagram className="h-5 w-5" />, url: 'https://instagram.com' },
    { name: 'Email', icon: <FiMail className="h-5 w-5" />, url: 'mailto:john.doe@example.com' }
  ]

  return (
    <section id="contact" className="py-10 bg-secondary/50 dark:bg-dark-light/20">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's chat about tech, design, or your next project!
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3">Find me on:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-dark rounded-full shadow-sm hover:shadow-md transition-shadow hover:text-primary"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-light"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-light"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-light"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact