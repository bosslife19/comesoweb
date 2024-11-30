import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'

const TeamModal = ({closeModals,}) => {
    const router = useNavigate()
    const handlechange =()=>{
        router("/TeamUser")
    }
  return (
    <div className="fixed z-[200] p-4 inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-lg  w-[648px]">
            <div className='border-b flex justify-between'>
            <h2 className="text-[18px]  py-2 px-3 font-[500] font-sans leading-[24px]   "> New User</h2>
            <span  onClick={closeModals} className='my-2 cursor-pointer mx-2 p-3 rounded-full bg-[#F5F6F7]  font-[500] font-sans leading-[24px]  '><TfiClose/></span>
            </div>
            {/* Form */}
            <form className='p-6'>
             <div>
             <div className='flex justify-between gap-[20px]'>
             <div className="mb-4 w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md outline-none  px-3 py-2 focus:outline-none "
                  placeholder="Type here"
                />
              </div>
              <div className="mb-4 w-full ">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md outline-none  px-3 py-2 focus:outline-none "
                  placeholder="Type here"
                />
               
              </div>
             </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="border w-full  border-gray-300 rounded-md outline-none  px-3 py-2 focus:outline-none "
                  placeholder="Enter email"
                />
               
              </div>
              <div className='flex justify-between gap-[25px]'>
             <div className="mb-4 w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                 Phone
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md outline-none  px-3 py-2 focus:outline-none "
                  placeholder="Enter phone number"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image
                </label>
                <input
                  type="file"
                  className="w-full border text-[12px] border-gray-300 rounded-md outline-none  px-3 py-2 focus:outline-none "
                  placeholder="Enter email"
                />
              </div>
             </div>
             <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Created Date
                </label>
                <input
                  type="month"
                  className="md:w-[280px] flex-row-reverse flex  border border-gray-300 rounded-md outline-none  px-3 py-2 focus:outline-none "
                 
                />
              </div>
             </div>
              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  onClick={closeModals}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                onClick={handlechange}
                   className="bg-[#0A2EE2] flex gap-2 items-center text-white px-4 py-2 rounded-[19px]"
                >
                  Create Now
                  <BsArrowRight className=' font-bold text-[17px]'/>
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default TeamModal
