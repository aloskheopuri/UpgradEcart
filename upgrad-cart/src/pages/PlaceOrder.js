import React from 'react'
import NonAdminNavbar from '../Nonadmin/NonAdminNavbar'
import StepsToBuy from '../components/StepsToBuy'

export default function PlaceOrder() {
  return (
    <div style={{position:'reletive',width:'100%'}}>

<div style={{position:'fixed',zIndex:'10000'}}>

<NonAdminNavbar  />

</div>

<div className='stepstobuy'>
    <StepsToBuy />
</div>
</div>
  )
}
