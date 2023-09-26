import React, { useEffect, useState } from 'react'
import alldata from '../ProductDatas/Alldata';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Filter from './Filter';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import DeleateProduct from '../ProductManupulation/DeleateProduct';

export default function AdminAllproducts() {
const [products,setproducts]=useState([]);
const [selectedOption,setSelectedOption]=useState('Select');
const [filteredResult,setFilterdResult]=useState([]);
const[modalopen,setmodelopen]=useState(false);

const handelModal=()=>{
  setmodelopen(true)
}

const handelFilterRation=(options)=>{
setSelectedOption(options);
switch (options) {
case "PriceLowToHigh":
setFilterdResult([...products].sort((a,b)=>a.price-b.price))
break;

case "PriceHighToLow":
setFilterdResult([...products].sort((a,b)=>b.price-a.price))
break;

default:
  setFilterdResult(alldata);
break;
  }
}


useEffect(()=>{
  setproducts(alldata)
  setFilterdResult(alldata)
},[])




  return (
<div className='productsBox'>

<div className='filterBox'><Filter onFilter={handelFilterRation}/></div>  

<div className='grid'>
{filteredResult.map((product)=>{
return(
<Card key={product.id} style={{height:'450px',boxShadow:'1px 1px 2px 2px gray'}}
sx={{ maxWidth: 345 }}>
<CardActionArea>
<CardMedia
sx={{ objectFit: 'contain' }} 
component="img"
height="300"
image={product.url}
alt="all product"

/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{product.name} <span >&#x20B9;:{product.price}</span> 
</Typography>
<Typography variant="body2" color="text.secondary">
{product.details}
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
) })

}
</div>
<DeleateProduct isOpen={modalopen} closeModal={() => setmodelopen(false)} />
</div>
)
}
