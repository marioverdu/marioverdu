import React from 'react'
import Typography from './Typography'

const competences = [
  'Atomic design', 'Team awareness', 'UX', 'UI', 'Interaction design',
  'Design systems', 'Handoff', 'Style guides', 'Documentation', 'Animation'
]

const Competences = () => {
  return (
    <div className="mb-8">
      <Typography variant="l-semibold" className="text-[#252A2F] mb-3">Competences</Typography>
      <div className="flex flex-wrap gap-2">
        {competences.map((competence, index) => (
          <span key={index} className="bg-white/50 border border-[rgba(0,94,182,0.10)] rounded-md px-2.5 py-1.5 inline-flex items-center">
            <Typography variant="s-regular" className="text-[#2F2F2F]">{competence}</Typography>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Competences