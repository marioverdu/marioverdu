import React, { useState } from 'react'
import Typography from './Typography'

const Header = () => {
  const [activeTab, setActiveTab] = useState('work')

  return (
    <header className="sticky top-0 z-50 bg-[#F5F9FC] shadow-sm">
      <div className="max-w-[1058px] mx-auto px-6 sm:px-12">
        <div className="h-[72px] flex items-center">
          <div className="flex h-full">
            <TabButton 
              isActive={activeTab === 'work'} 
              onClick={() => setActiveTab('work')}
            >
              Work Experience
            </TabButton>
            <TabButton 
              isActive={activeTab === 'portfolio'} 
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </TabButton>
          </div>
        </div>
      </div>
    </header>
  )
}

interface TabButtonProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`h-full px-4 flex items-center border-b-2 transition-colors duration-300 ${
        isActive 
          ? 'border-[#012E46] text-[#012E46]' 
          : 'border-transparent text-[#252A2F] hover:text-[#012E46]'
      }`}
      onClick={onClick}
    >
      <Typography variant="m-semibold">
        {children}
      </Typography>
    </button>
  )
}

export default Header