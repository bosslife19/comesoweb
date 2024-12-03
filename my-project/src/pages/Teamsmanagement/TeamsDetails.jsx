import React from 'react'
import Rounded from '../../components/Teams/TeamsDetailsPage/Rounded'
import TeamHeader from '../../components/Teams/TeamsDetailsPage/TeamHeader'

const TeamsDetails = () => {
  return (
    <div className='lg:h-[100vh] mt-[20px] h-full mb-0 md:mb-[30%] md:pb-[40%]'>    
        <TeamHeader/>
      <Rounded/>
    </div>
  )
}

export default TeamsDetails
