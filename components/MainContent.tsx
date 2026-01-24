import React from 'react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS } from '../constants';
import { CheckCircle2, Code, Layers, Settings, Database, Cpu, Cloud, FolderOpen } from 'lucide-react';
import { IconType } from '../types';

const IconMap: Record<IconType, React.ReactNode> = {
  code: <Code size={24} />,
  layers: <Layers size={24} />,
  settings: <Settings size={24} />,
  database: <Database size={24} />,
  cpu: <Cpu size={24} />,
  cloud: <Cloud size={24} />,
};

const MainContent: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      
      {/* Professional Summary */}
      <section>
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-primary-500 pl-4">
          Professional Summary
        </h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {PERSONAL_INFO.summary}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PERSONAL_INFO.summaryPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="text-primary-500 mt-0.5 flex-shrink-0" size={16} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section>
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-primary-500 pl-4">
          Technical Arsenal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg">
                  {IconMap[category.icon]}
                </div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-primary-500 pl-4">
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((project, idx) => (
             <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                   <FolderOpen size={20} className="text-primary-500"/>
                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">{project.name}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Timeline */}
      <section>
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary-500 pl-4">
          Professional Experience
        </h3>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                {exp.company} <span className="text-gray-400 mx-2">|</span> <span className="text-sm text-gray-500">{exp.location}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MainContent;