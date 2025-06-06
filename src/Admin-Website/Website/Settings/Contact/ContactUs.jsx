 import { BiPhone } from 'react-icons/bi'

const ContactUs = () => {
  return (
    <div className="lg:flex md:justify-between  gap-[20px] h-screen  max-2xl:h-ful  ">

    <div className='md:max-w-[600px] flex-wrap w-full  px-[20px] border py-[20px] h-[300px] bg-[#FFFFFF] rounded-[12px]'>
       <h2 className="md:text-[20px] text-[16px] font-[600] md:leading-[24px] mb-2 text-[#1A1A21]">Complaints</h2>
          <p className="mb-4 font-[400] md:leading-[23.2px] text-[12px] md:text-[15px] text-[#8C94A6]">
          You can email us to resolve all your complaints
          </p>
          <div>
          <div>
            <label htmlFor="fullname" className="block text-[12px] py-2 md:text-[14px] font-medium text-gray-700">
            Contact us
            </label>
            <div className='shadow-md flex gap-4 py-[12px] leading-[20px] md:py-[18px] px-[14px] rounded-[10px] border  border-[#f4f5fa] items-center'>

                <span className='text-[#98A2B3] text-[12px] md:text-[14px]'>support@mycomeso.com</span>
            </div>
           
            </div>
          </div>
    </div>
    </div>
  )
}

export default ContactUs
