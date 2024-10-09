import React from 'react'
import { ExternalLink } from 'lucide-react'
import Typography from './Typography'

const experiences = [
  {
    company: 'Proqio',
    role: 'Diseñador UX/UI',
    period: '2023',
    description: 'En Proqio, trabajé en la mejora de la arquitectura de la información y la homogeneización de patrones de diseño para su CRM y gestor de sensores.',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
]

const WorkExperience = () => {
  return (
    <div className="mb-8">
      <Typography variant="l-semibold" className="text-[#252A2F] mb-3">Work experience</Typography>
      {experiences.map((experience, index) => (
        <div key={index} className="bg-[#F9FBFD] border border-[rgba(0,94,182,0.10)] rounded-xl p-4 mb-4">
          <div className="flex items-center mb-4">
            <img src={experience.logo} alt={experience.company} className="w-10 h-10 rounded-md mr-4" />
            <div>
              <Typography variant="m-semibold" className="text-[#2F2F2F]">{experience.role} | {experience.company}</Typography>
              <Typography variant="s-regular" className="text-[#2F2F2F] opacity-50">{experience.period}</Typography>
            </div>
          </div>
          <Typography variant="m-regular" className="text-[#252A2F] mb-4">{experience.description}</Typography>
          <div className="flex justify-between items-center">
            <Typography variant="caps-subtitle" className="border border-[rgba(0,94,182,0.10)] rounded-full px-2 py-1">NDA</Typography>
            <a href="#" className="flex items-center">
              <Typography variant="s-semibold" className="text-[#252A2F]">See all</Typography>
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkExperience