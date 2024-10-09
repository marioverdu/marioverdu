import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Pinned from './components/Pinned'
import Competences from './components/Competences'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F9FC]">
      <Header />
      <main className="max-w-[1058px] mx-auto px-6 sm:px-12">
        <Profile />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[68%] md:pr-8">
            <About />
            <Pinned />
            <Competences />
            <WorkExperience />
            <Education />
          </div>
          <div className="md:w-[32%]">
            {/* Content for the second column will go here */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App