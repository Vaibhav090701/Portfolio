import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">
              <span className="text-primary">Vaibhav</span> Randad
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Vaibhav Randad. All rights reserved.
            </p>
            
            <p className="text-sm flex items-center">
              Made with <FiHeart className="mx-1 text-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer