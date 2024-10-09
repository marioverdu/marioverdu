import React from 'react'
import { Link } from 'lucide-react'
import Typography from './Typography'

const Pinned = () => {
  return (
    <div className="mb-8">
      <Typography variant="l-semibold" className="text-[#252A2F] mb-3">Pinned</Typography>
      <div 
        className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => window.open('mailto:marioverdugambin@gmail.com', '_blank')}
      >
        <Link className="w-4 h-4 mr-2 text-[#252A2F] opacity-50" />
        <Typography variant="m-regular" className="text-[#252A2F] opacity-70">
          marioverdugambin@gmail.com
        </Typography>
      </div>
    </div>
  )
}

export default Pinned