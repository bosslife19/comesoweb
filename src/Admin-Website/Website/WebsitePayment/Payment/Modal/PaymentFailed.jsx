 
import bad from "../../../../../assets/bad.png"
const Failed = ( {handProceedSecond}) => {
      
  return (
    <div className="fixed inset-0 font-sans bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
    <div className="bg-white rounded-lg w-full    md:w-1/2">
     <div className="w-full  flex justify-center text-center flex-col md:px-[40px] md:py-[30px] space-y-3">
      <h2 className="font-alata font-[400] text-[20px] md:text-[40px] leading-[49.4px] text-[#456EFE]">
      Payment Failed
      </h2>
     <p className=' font-alata font-[400] text-[12px] md:text-[20px] leading-[29.3px] text-[#A4A9AE]'>
     Transaction failed either due poor internet connection or issues from the recipient’s bank. Reversal might be in 24 hours
     </p>
     <div className='px-[10px] m-auto'>
     <img src={bad} className=' '/>
     </div>
     <div className='flex justify-center '>
    <button
    onClick={handProceedSecond}
      className="text-[#fff]  w-full  py-2 md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] md:text-[20px] md:leading-[30px] "
         >
           
            <span> back to Home</span>
          
     </button>
    </div>
    </div>

    
    {/* Next Button */}
   
     </div>
    </div>
  )
}

export default Failed
