import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Store/CartSlice';
import { Alert,AlertTitle } from '@mui/material';

export default function ConfirmOrder() {

const [alert,setAlert]=useState('')
const items = useSelector(state => state.cart);

const dispatch=useDispatch();

const nevigated=useNavigate();

const TotalProductprice = () => {
let totalPrice = 0;
for (const product of items) {
totalPrice += product.price * product.quantity;
}
return totalPrice;
};

const handlePlaceOrder = () => {

setAlert('Your order has been placed successfully.');
dispatch(clearCart())
setTimeout(() => {
nevigated('/Nonadminpage');
}, 3000);
};



return (

<div >
<div style={{
width:'50%',
marginLeft:'15%',
display:'flex',
flexDirection:'column',
marginTop: '100px',
}}>
{items.map(products => (
<div
key={products.id}
style={{
boxShadow: '2px 1px 5px 4px #808080',
display: 'flex',
borderRadius: '10px',
width: '100%',
height: '80px',
marginTop:'20px',
justifyContent:'center',
alignItems:'center',
justifyContent: 'space-between',

}}
>
<img style={{ width: '50px' }} src={products.url} alt="product" />
<h3>{products.details}</h3>
<h3 style={{color:'red'}}>&#8377;: {products.price}</h3>

<h2 ><span
style={{fontSize:'20px'}}
>Quantity:</span>{products.quantity}</h2>

</div>
))}



</div>
<div className='Finalplaceorder'
><h2>Total Price: <br /><br />
<span style={{color:'red'}}> &#x20B9;: {TotalProductprice()}</span></h2>
<Button onClick={handlePlaceOrder} variant="contained">Place Order</Button>
</div>



<div style={{position:'absolute',
right:'0',top:'0'}}>
{alert && (
<Alert severity="success">
<AlertTitle>Success</AlertTitle>
{alert}
</Alert>
)}
</div>


</div>


);
}
