 import CustomBarChart from '../../../features/Apexchart/Saleschart'
import DashboardTable from './SalesSection'

const SalesboardMain = () => {
  return (
    <div className='md:flex justify-between'>
      <div className="md:w-[75%]">
      <CustomBarChart/>
      </div>

      <div className=" md:w-[25%]">
        <DashboardTable/>
      </div>
    </div>
  )
}

export default SalesboardMain
