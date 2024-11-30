import React from 'react'
import logo from "../../../../assets/imglogo.png"
import "../../../../styles/overflow_hidden.css"


const Beneficals = () => {

    const Benefits =[
        {
            img: logo,
            heads:"Jamal Musiala",
            numbers:"0 913 454 5678",
            email:"Jamalmusiala@gmail.com"
        },
        {
            img: logo,
            heads:"Jamal Musiala",
            numbers:"0 913 454 5678",
            email:"Jamalmusiala@gmail.com"
        },
        {
            img: logo,
            heads:"Jamal Musiala",
            numbers:"0 913 454 5678",
            email:"Jamalmusiala@gmail.com"
        },
        {
            img: logo,
            heads:"Jamal Musiala",
            numbers:"0 913 454 5678",
            email:"Jamalmusiala@gmail.com"
        },
        {
            img: logo,
            heads:"Jamal Musiala",
            numbers:"0 913 454 5678",
            email:"Jamalmusiala@gmail.com"
        },
        {
            img: logo,
            heads:"Jamal Musiala",
            numbers:"0 913 454 5678",
            email:"Jamalmusiala@gmail.com",
            
        },
    ]
  return (
    <div className='w-full md:w-[330px] shadow-md scroll-container border overflow-y-auto h-[440px] rounded-[10px] font-sans'>
     <h3 className='py-3 px-3 border-b text-[#191B1C] font-[500] text-[16px] leading-[24px] '>Beneficiaries</h3>
     <div className='px-4'>
        {Benefits.map((items, index)=>(
             <div key={index} className='flex items-center py-2 gap-2'>
             <img src={items.img} className='w-[50px] h-[50px] rounded-full'/>
             <div>
                 <h3>{items.heads}</h3>
                 <p>{items.numbers}</p>
                 <span>{items.email}</span>
             </div>
         </div>
        ))}
       
     </div>
    </div>
  )
}

export default Beneficals
