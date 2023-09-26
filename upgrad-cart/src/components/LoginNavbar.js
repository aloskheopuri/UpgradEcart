import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';


export default function LoginNavbar() {

return (
<>
<div>
<div className='navbar'>

<div className='logo'>

< ShoppingCartIcon
style={{color:'white',marginRight:'10px'}} />

<h1>upGrad-E-Shop</h1>
</div>

<div className='search'>
  <input className='searchBox' type="text" placeholder='Search..' />
    <SearchSharpIcon  className='searchIcon'/>
    <h1  style={{marginLeft:'40px'}}>Home</h1>

</div>



<div className='navButtons'>

<h1  className='login'>LOGIN</h1>

</div>
</div>


</div>



</>
)
}
