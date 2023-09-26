import React from 'react'
import NonAdminNavbar from '../Nonadmin/NonAdminNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../Store/CartSlice';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


export default function Cart() {
const items=useSelector(state=>state.cart)
const dispatch=useDispatch();

const handelOnIncrease=(item)=>{
  dispatch(add(item))
}
const handelOnDecrease=(item)=>{
  dispatch(remove(item))
}
const TotalProductprice=()=>{
  let totalPrice=0;
  for(const product of items){
    totalPrice +=product.price*product.quantity;
  }
  return totalPrice;
}

  return (



<div style={{position:'reletive'}}>

<div style={{position:'fixed',zIndex:'10000'}}>

<NonAdminNavbar/>

</div>


<div >

<div className='cartGrid' style={{position:'absolute',
marginTop:'100px'}} >
{items.map((products)=>{
return(
<div key={products.id} className='cartProducts'>

<img style={{width:'180px',height:'340px'}}
src={products.url} alt="product" />

<div className='cartproductdetails'>
<h2>{products.name}</h2>
<h2><span style={{fontWeight:'lighter',fontSize:'20px'}}>Cateogry: </span>{products.cateogry}</h2>
<h3>{products.details}</h3>
<h2 style={{color:'red'}}> &#x20B9;: {products.price}</h2>


<Stack spacing={2} direction="row">

<Button variant="contained" onClick={()=>{handelOnIncrease(products)}}>+</Button>
<h1>{products.quantity}</h1>
<Button 
variant="contained" onClick={()=>{handelOnDecrease(products)}}>-</Button>

</Stack>
</div>



         
</div>

)})}


</div>
</div>


<div className='placeOrder'
><h2>Total Price: <br /><br />
<span style={{color:'red'}}> &#x20B9;: {TotalProductprice()}</span></h2>
<Link to='/placeorder'><Button variant="contained">Place Order</Button></Link>
</div>

</div>
)
}
