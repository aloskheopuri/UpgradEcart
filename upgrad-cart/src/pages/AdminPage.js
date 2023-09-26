import React, { useState } from 'react'
import AdminNavbar from '../Admin/AdminNavbar'
import AdminAllproducts from '../components/AdminAllproducts';
import Electronics from '../components/Electronics';
import Apparel from '../components/Apparel';
import Footwear from '../components/Footwear'
import Personal from '../components/Personal'

export default function AdminPage() {

const [footwear,setfootwear]=useState(false)
const [personal,setpersonal]=useState(false)
const [electronics,setelectronics]=useState(false)
const [apparel,setapparel]=useState(false)
const [allproducts,setallproducts]=useState(true)


const handelonallproductClick=()=>{
setallproducts(true)
setapparel(false)
setelectronics(false)
setpersonal(false)
setfootwear(false)
}

const handelonfootwearClick=()=>{
setallproducts(false)
setapparel(false)
setelectronics(false)
setpersonal(false)
setfootwear(true)
}
const handelonapparelClick=()=>{
setallproducts(false)
setapparel(true)
setelectronics(false)
setpersonal(false)
setfootwear(false)
}
const handelonelectronicsClick=()=>{
setallproducts(false)
setapparel(false)
setelectronics(true)
setpersonal(false)
setfootwear(false)
}
const handelonpersonalClick=()=>{
setallproducts(false)
setapparel(false)
setelectronics(false)
setpersonal(true)
setfootwear(false)
}


  return (
    <div style={{position:'reletive'}}>

      <div style={{position:'fixed',zIndex:'10000'}}>
      <AdminNavbar />
      </div>

      <div className='productbuttons'>
        <button onClick={handelonallproductClick} className='activebtn'>ALL</button>        
        <button onClick={handelonapparelClick} className='productbtns'>APPAREL</button>
       <button onClick={handelonelectronicsClick} className='productbtns'>ElECTRONICS</button>
       <button onClick={handelonfootwearClick} className='productbtns'>FOOTWEAR</button>
        <button onClick={handelonpersonalClick} className='productbtns'>PERSONALCARE</button>
      </div>

      <div style={{position:'absolute', marginTop:'15%'}}>
      {allproducts &&  <AdminAllproducts/>}
        {personal && <Personal/>}
        {footwear && <Footwear/>}
        {apparel && <Apparel/>}
        {electronics && <Electronics/>}
      </div>
    </div>
  )
}
