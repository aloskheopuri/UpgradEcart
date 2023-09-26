import React, { useEffect, useState } from 'react'
import ShoesData from'../ProductDatas/ShoesData'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { add } from '../Store/CartSlice';

export default function Electronics() {

  const dispatch=useDispatch();
const handelonclick=(products)=>{
  dispatch(add(products))
}

const [products,setproducts]=useState([]);
const [selectedOption,setSelectedOption]=useState('Select');
const [filteredResult,setFilterdResult]=useState([]);

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
  setFilterdResult(ShoesData);
break;
  }
}


useEffect(()=>{
  setproducts(ShoesData)
  setFilterdResult(ShoesData)
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


<Button onClick={()=>{handelonclick(product)}} style={{marginTop:'10px'}}
 variant="contained">BUY</Button>




</CardContent>
</CardActionArea>
</Card>
) })

}
</div>
</div> 
)
}
