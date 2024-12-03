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
        <div className="   my-[20px]">
    <SettingsBoard/>
    </div>
      )}
    </>
  )
}
