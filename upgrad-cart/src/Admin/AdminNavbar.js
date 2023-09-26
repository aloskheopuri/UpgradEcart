import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom';
import alldata from '../ProductDatas/Alldata';

export default function AdminNavbar() {
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
    <div>
      <div className='navbar'>
        <div className='logo'>
          <ShoppingCartIcon style={{ color: 'white', marginRight: '10px' }} />
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/adminpage'>
            <button className='navbtn'>upGrad-E-Shop</button>
          </Link>
        </div>
        <div className='search'>
          <input
            value={query}
            onChange={handleOnChange}
            className='searchBox'
            type="text"
            placeholder='Search..'
          />
          <SearchSharpIcon className='searchIcon' />
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/adminpage'>
            <button className='navbtn' style={{ marginRight: '40px' }}>Home</button>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/addproduct'>
            <button className='navbtn' >Add Product</button>
          </Link>
        </div>
        <div className='navButtons'>
          <h1 className='login'  >LOGOUT</h1>
        </div>
      </div>

<div className='searchResultbox'>
{searchResult.length > 0 && (
  <div className='searchbox'>
    {searchResult.map((product) => (
      <Link
        className='searchResults'
        to={`/selectedsearchresult/${product.id}`} 
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


  );
}
