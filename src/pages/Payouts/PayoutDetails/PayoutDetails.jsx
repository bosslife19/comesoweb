import React from 'react'
import DetailsPayMain from '../../../components/Payouts/PayoutDetails/DetailsHeader'
import PayoutDetai from '../../../components/Payouts/PayoutDetails/PayoutDetails'

export const PayoutDetails = () => {
  return (
    <div className='md:h-[100vh] md:mb-[200px]'>
        <DetailsPayMain/>
        <PayoutDetai/>
    </div>
  )
}
