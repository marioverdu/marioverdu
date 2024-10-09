import React from 'react'
import Typography from './Typography'

const About = () => {
  return (
    <div className="mb-8">
      <Typography variant="l-semibold" className="text-[#252A2F] mb-3">About me</Typography>
      <div className="flex flex-col gap-3">
        <Typography variant="m-regular" className="text-[#252A2F] opacity-70">
          Since 2017 I design, validate, iterate and prototype clean, vibrant and functional digital products aligned with the business.
        </Typography>
        <Typography variant="s-semibold" className="text-[#252A2F] opacity-70">
          <a href="#">Read more</a>
        </Typography>
      </div>
    </div>
  )
}

export default About