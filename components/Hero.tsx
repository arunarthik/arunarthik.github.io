import React from 'react';
import { Mail, Phone, Download, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] rounded-full bg-gradient-to-br from-blue-50/50 to-indigo-100/50 dark:from-blue-900/20 dark:to-purple-900/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-sm font-semibold text-primary-600 dark:text-primary-500 tracking-wide uppercase mb-2">
              Portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
              {PERSONAL_INFO.title}
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
               <div className="flex items-center gap-1">
                 <MapPin size={16} />
                 <span>{PERSONAL_INFO.location}</span>
               </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
              >
                <Mail className="mr-2" size={18} />
                Email Me
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
              >
                <Phone className="mr-2" size={18} />
                Call Me
              </a>
              <button 
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
                onClick={() => alert("Resume download simulation")}
              >
                <Download className="mr-2" size={18} />
                Resume
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 relative">
             {/* Placeholder for Profile Image if user had one, using abstract shape for now or standard placeholder */}
             <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900">
                <span className="text-4xl font-serif text-gray-400 dark:text-gray-500 font-bold">TA</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;