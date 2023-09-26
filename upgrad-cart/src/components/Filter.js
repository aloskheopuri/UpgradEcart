import React from 'react'

export default function Filter({onFilter}) {
    const onchange=(e)=>{
    onFilter(e.target.value);
    }
  return (
    <div>
      <h3 style={{marginBottom:'2px'}}
      >Sort By..</h3>

      <select  onChange={onchange}
      style={{fontSize:'x-large',
      borderRadius:'5px',
    padding:'5px 15px',
    cursor:'pointer'
    }}

       defaultValue="Select">
        <option value="Select">Select...</option>
        <option value="All">All products</option>
        <option value="PriceLowToHigh">Price Low To High</option>
        <option value="PriceHighToLow">Price High To Low</option>
        <option value="Newest">Newest</option>
      </select>
    </div>
  )
}
