import { useEffect } from 'react'
import TeamBeneficals from './Beneficials/TeamBeneficals'
import DonutCharts from './Chart/DonutChart'
import TeamForm from './Form/TeamForm'

const Rounded = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className='md:flex flex-wrap md:space-y-0 space-y-3 gap-[10px] py-[25px] justify-between'>
      <TeamForm/>
      <TeamBeneficals/>
      <DonutCharts/>
      
    </div>
  ) 
}

export default Rounded
