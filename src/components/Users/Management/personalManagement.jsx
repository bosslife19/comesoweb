import React from 'react'
import UserForm from '../Personal/Form/UserForm'
import DonutChart from '../Personal/Chart/DonutChart'
import Beneficals from '../Personal/Beneficials/Beneficals'

const PersonalManagement = () => {
  return (
    <div className='flex flex-wrap justify-between gap-[25px]'>
      <UserForm/>
      <DonutChart/>
      <Beneficals/>
    </div>
  )
}

export default PersonalManagement
