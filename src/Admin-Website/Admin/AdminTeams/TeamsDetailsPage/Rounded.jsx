import React from 'react'
import TeamBeneficals from './Beneficials/TeamBeneficals'
import DonutCharts from './Chart/DonutChart'
import TeamForm from './Form/TeamForm'

const Rounded = () => {
  return (
    <div className='md:flex flex-wrap gap-[10px] py-[25px] justify-between'>
      <TeamForm/>
      <TeamBeneficals/>
      <DonutCharts/>
      
    </div>
  ) 
}

export default Rounded
