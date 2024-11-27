import React from 'react'
import CustomerboardTitle from '../../components/sales/customer/CustomerboardTitle'
import CustomerbordBox from '../../components/sales/customer/CustomerbordBox'
import CustomerboardList from '../../components/sales/customer/CustomerboardOverview'

const Customermangement = () => {
    const resList = [
        {
          firstName: "John",
          lastName: "Doe",
           businessName: "Customers",
        },
         
      ];
  return (
    <>
      <CustomerboardTitle resList={resList} />  
     <CustomerbordBox/>
      <CustomerboardList/>
    </>
  )
}

export default Customermangement
