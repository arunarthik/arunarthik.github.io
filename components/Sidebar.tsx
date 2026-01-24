import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Education Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
          <GraduationCap className="text-primary-600 dark:text-primary-400" size={20} />
          <h4 className="font-bold text-gray-900 dark:text-white">Education</h4>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <h5 className="font-semibold text-gray-900 dark:text-white text-sm">{edu.degree}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.institution}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Card */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center gap-2">
          <Award className="text-yellow-300" size={20} />
          <h4 className="font-bold">Certifications</h4>
        </div>
        <div className="p-6">
          {CERTIFICATIONS.length > 0 ? (
            <ol className="list-decimal list-inside space-y-3 text-sm text-indigo-100">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="marker:text-yellow-300 marker:font-bold">
                  <span className="font-medium text-white">{cert.name}</span>
                  {cert.issuer && <span className="block text-xs opacity-75 ml-4">{cert.issuer}, {cert.year}</span>}
                </li>
              ))}
            </ol>
          ) : (
            <div className="text-center py-4 text-indigo-100 text-sm">
              <p>Continuous learner focusing on hands-on project implementations.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;