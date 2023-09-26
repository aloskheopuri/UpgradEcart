import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import alldata from '../ProductDatas/Alldata';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AdminNavbar from '../Admin/AdminNavbar';
import DeleateProduct from '../ProductManupulation/DeleateProduct';

export default function SelectedSearchResult() {
const {searchProductId}=useParams();
const [selectedProduct, setSelectedProduct] = useState(null);
const[modalopen,setmodelopen]=useState(false);
const handelModal=()=>{
setmodelopen(true)
}

useEffect(()=>{
console.log('Product ID:', searchProductId);
const product=alldata.find((product)=>product.id===parseInt(searchProductId))
if(product){
setSelectedProduct(product)
}


},[searchProductId])
return (
<div>
<div style={{position:'fixed',zIndex:'10000'}}>
<AdminNavbar />
</div>

<div >
{selectedProduct ?(
<div style={{position:'absolute',marginTop:'200px'}}
>

<Card key={selectedProduct.id} style={{height:'450px',boxShadow:'1px 1px 2px 2px gray'}}
sx={{ maxWidth: 345 }}>
<CardActionArea>
<CardMedia
sx={{ objectFit: 'contain' }} 
component="img"
height="300"
image={selectedProduct.url}
alt="all product"

/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{selectedProduct.name} <span >&#x20B9;:{selectedProduct.price}</span> 
</Typography>
<Typography variant="body2" color="text.secondary">
{selectedProduct.details}
</Typography>


<div style={{
display:'flex',
justifyContent:'space-between',
alignItems:'center'
}}>
<Button style={{marginTop:'10px'}}
variant="contained">BUY</Button>

<Link style={{textDecoration:'none  !important' ,color: 'inherit'}}  to='/modify'>
<EditIcon
style={{marginLeft:'100px'}}/>
</Link>

<Link style={{textDecoration:'none  !important' ,color: 'inherit'}}  >
<DeleteIcon onClick={handelModal}/>
</Link>
</div>




</CardContent>
</CardActionArea>
</Card>



</div>
): (
<h1>Product not found</h1>)}
</div>
<DeleateProduct isOpen={modalopen} closeModal={() => setmodelopen(false)} />
</div>
)
}
