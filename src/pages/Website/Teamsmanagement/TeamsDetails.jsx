import React, { useState } from 'react'
import Rounded from '../../components/Teams/TeamsDetailsPage/Rounded'
import TeamHeader from '../../components/Teams/TeamsDetailsPage/TeamHeader'
import CustomLottiePlayer from '../../components/welcomLoading/MainLoading';

const TeamsDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : (
    <div className='lg:h-[100vh] mt-[20px] h-full mb-0 md:mb-[30%] md:pb-[40%]'>    
        <TeamHeader/>
      <Rounded/>
    </div>
)}
    </>

  )
}

export default TeamsDetails
