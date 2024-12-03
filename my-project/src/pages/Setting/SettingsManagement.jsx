import React, { useState } from 'react'
import SettingsBoard from '../../components/Settings/SettingsBoard'
import CustomLottiePlayer from '../../components/welcomLoading/MainLoading'

export const SettingsManagement = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="lg:h-screen h-full mb-0 md:mb-[72%] md:pb-[40%]">
    <SettingsBoard/>
    </div>
      )}
    </>
  )
}
