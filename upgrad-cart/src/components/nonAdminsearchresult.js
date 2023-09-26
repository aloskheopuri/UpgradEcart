import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import alldata from '../ProductDatas/Alldata';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import NonAdminNavbar from '../Nonadmin/NonAdminNavbar'
import { useDispatch } from 'react-redux';
import { add } from '../Store/CartSlice';

export default function NonAdminSearchResult() { 


const dispatch=useDispatch();
const handelonclick=(products)=>{
dispatch(add(products))
}

const { searchProductId } = useParams();
const [selectedProduct, setSelectedProduct] = useState(null);

useEffect(() => {
console.log('Product ID:', searchProductId);
const product = alldata.find((product) => product.id === parseInt(searchProductId));

if (product) {
setSelectedProduct(product);
}
}, [searchProductId]);

return (
<div>
<div style={{ position: 'fixed', zIndex: '10000' }}>
{/* Assuming AdminNavbar is a component */}
<NonAdminNavbar />
</div>

<div>
{selectedProduct ? (
<div style={{ position: 'absolute', marginTop: '200px' }}>
<Card key={selectedProduct.id} style={{ height: '450px', boxShadow: '1px 1px 2px 2px gray' }} sx={{ maxWidth: 345 }}>
<CardActionArea>
<CardMedia sx={{ objectFit: 'contain' }} component="img" height="300" image={selectedProduct.url} alt="all product" />
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{selectedProduct.name} <span>&#x20B9;:{selectedProduct.price}</span>
</Typography>
<Typography variant="body2" color="text.secondary">
{selectedProduct.details}
</Typography>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<Button onClick={()=>{handelonclick(selectedProduct)}} 

style={{ marginTop: '10px' }} variant="contained">
BUY
</Button>
</div>
</CardContent>
</CardActionArea>
</Card>
</div>
) : (
<h1>Product not found</h1>
)}
</div>
</div>
);
}
