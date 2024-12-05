import  { useState } from 'react'
import CustomLottiePlayer from '../../../Admin-Website/welcomLoading/MainLoading';
import SettingsBoard from '../../../Admin-Website/Website/Settings/SettingsBoard';
// import SettingsBoard from '../../components/Settings/SettingsBoard'
// import CustomLottiePlayer from '../../components/welcomLoading/MainLoading'

export const SettingsManagemen = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <> 
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="">
    <SettingsBoard/>
    </div>
      )}
    </>
  )
}
