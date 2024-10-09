import React from 'react'
import Typography from './Typography'

const educations = [
  {
    institution: 'IronHack',
    degree: 'UX/UI Design Bootcamp',
    year: '2018',
    logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
]

const Education = () => {
  return (
    <div className="mb-8">
      <Typography variant="l-semibold" className="text-[#252A2F] mb-3">Education</Typography>
      {educations.map((education, index) => (
        <div key={index} className="bg-[#F9FBFD] border border-[rgba(0,94,182,0.10)] rounded-xl p-4 mb-4 flex items-center">
          <img src={education.logo} alt={education.institution} className="w-10 h-10 rounded-md mr-4" />
          <div>
            <Typography variant="m-semibold" className="text-[#2F2F2F]">{education.institution}</Typography>
            <Typography variant="s-regular" className="text-[#2F2F2F]">{education.degree}</Typography>
            <Typography variant="s-regular" className="text-[#2F2F2F] opacity-50">{education.year}</Typography>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education