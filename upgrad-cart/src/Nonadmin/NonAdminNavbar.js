
import React , { useState }from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import alldata from '../ProductDatas/Alldata';


export default function LoginNavbar() {
const item=useSelector(state=>state.cart)
const [query, setQuery] = useState('');
const [searchResult, setSearchResult] = useState([]); 

const handleOnChange = (e) => {
const searchText = e.target.value.toLowerCase();
setQuery(e.target.value);

// Filter products based on the search query
const filteredProducts = alldata.filter((product) =>
product.name.toLowerCase().includes(searchText)||
product.cateogry.toLowerCase().includes(searchText)
);

setSearchResult(filteredProducts);
// Clear search results if the query is empty
if (searchText === '') {
setSearchResult([]);
}
};


return (
<>
<div>
<div className='navbar'>

<div className='logo'>

< ShoppingCartIcon
style={{color:'white',marginRight:'10px'}} />

<Link style={{textDecoration:'none  !important' ,color: 'inherit'}} 
to='/nonadminpage'>
<button className='navbtn'
>upGrad-E-Shop</button></Link>
</div>

<div className='search'>
<input
value={query}
onChange={handleOnChange}
className='searchBox'
type="text"
placeholder='Search..'
/>
<SearchSharpIcon  className='searchIcon'/>

<Link style={{textDecoration:'none  !important' ,color: 'inherit'}} to='/nonadminpage'><button className='navbtn'  style={{marginLeft:'40px'}}>Home</button></Link>

<div style={{display:'flex',alignItems:'center',marginLeft:'50px',position:'relative'}}>

<Link to='/cart' style={{textDecoration:'none  !important' ,color: 'inherit'}}>
<ShoppingBagIcon 
style={{fontSize:'60px',}}/></Link>

<h1 style={{position:'absolute',color:'red',marginLeft:'16px',marginTop:'38px'}}>{item.length}</h1>
<Link to='/cart'><button className='navbtn' >Your Orders</button></Link>

</div>
</div>  
<div className='navButtons'>
<h1  className='login'>LOGOUT</h1>
</div>
</div> 

<div className='searchResultbox'>
{searchResult.length > 0 && (
<div className='searchbox'>
{searchResult.map((product) => (
<Link
className='searchResults'
to={`/nonadminselectedsearchresult/${product.id}`} 
key={product.id}
>
<img style={{ width: '50px', height: '40px' }} src={product.url} alt="" />
<h4>{product.name}</h4>
</Link>
))}
</div>
)}
</div>

</div>
</>
)
}
