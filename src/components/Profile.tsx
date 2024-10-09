import React from 'react'
import Typography from './Typography'

const Profile = () => {
  return (
    <div className="Banner relative w-screen mb-8 z-10 left-1/2 right-1/2 -mx-[50vw]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://marioverdu.com/asset/banner.png)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F9FC] via-[rgba(245,249,252,0.80)] to-[rgba(247,247,255,0.95)]" />
      <div className="absolute bottom-0 w-full h-[1px] bg-[rgba(0,94,182,0.10)]" />
      
      <div className="max-w-[1058px] mx-auto relative px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center py-16 sm:py-0 sm:h-[245px]">
        <div className="Group1000004912 flex flex-col sm:flex-row items-start sm:items-center">
          <div className="Avatar w-28 h-28 rounded-full overflow-hidden flex justify-center items-center bg-[#C4C4C4]">
            {/* Empty div to represent the 112x112 px photo */}
            <div className="w-[112px] h-[112px]"></div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-8 flex flex-col justify-center gap-3">
            <Typography variant="xl" className="text-[#252A2F] font-semibold">Mario Verdú</Typography>
            <Typography variant="m-light" className="text-[#252A2F]">Lead Web Designer</Typography>
          </div>
        </div>
        
        <div className="Group1000004781 flex space-x-4 mt-6 sm:mt-0">
          <button className="ContactButton bg-[#012E46] shadow-[0px_4.77px_47.74px_#D3DEEE] rounded-md overflow-hidden border border-[rgba(0,94,182,0.10)] flex items-center px-4 py-2">
            <Typography variant="s-semibold" className="text-[#F5F9FC] mr-2">Contact</Typography>
            <div className="AssetIcon1 w-3 h-3 rounded-sm overflow-hidden flex justify-center items-center">
              <div className="Vector w-[10.80px] h-[10.80px] bg-gradient-to-b from-[#F3F7FA] to-[#DCE5F6]"></div>
            </div>
          </button>
          <button className="ButtonsCta w-[59.23px] h-9 bg-[#F3F4F9] shadow-[0px_4.77px_47.74px_#D3DEEE] rounded-md overflow-hidden flex justify-center items-center">
            <div className="Group1000004721 flex sm:flex-col justify-center items-center space-x-1 sm:space-x-0 sm:space-y-1">
              <div className="w-[3.58px] h-[3.58px] bg-[#252A2F] rounded-full" />
              <div className="w-[3.58px] h-[3.58px] bg-[#252A2F] rounded-full" />
              <div className="w-[3.58px] h-[3.58px] bg-[#252A2F] rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile