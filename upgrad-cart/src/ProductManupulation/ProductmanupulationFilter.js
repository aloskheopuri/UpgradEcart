import React, { useState } from 'react'

export default function ProductmanupulationFilter(){
  return (
    <div>
      <select 
      style={{fontSize:'x-large',
      borderRadius:'5px',
    padding:'5px 135px',
    cursor:'pointer'
    }}

       defaultValue="Select">
        <option value="Select">Select...</option>
        <option value="Electronics">Electronics</option>
        <option value="Apperals">Apperals</option>
        <option value="FootWear">FootWear</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  )
}