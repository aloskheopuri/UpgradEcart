

import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NonAdminPage from './pages/NonAdminPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import MainHomePage from './pages/MainHomePage';
import Signup from './components/Signup';
import Form from './components/Form';
import Footwear from './components/Footwear';
import Electronics from './components/Electronics';
import Apparel from './components/Apparel';
import Personal from './components/Personal';
import Allproducts from './components/Allproducts';
import { Provider } from 'react-redux';
import Store from './Store/Store'
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import AddProduct from './ProductManupulation/AddProduct';
import Modify from './ProductManupulation/Modify';
import DeleateProduct from './ProductManupulation/DeleateProduct';
import SelectedSearchResult from './components/SelectedSearchResult';
import NonAdminsearchresult from './components/nonAdminsearchresult';

function App() {
  return (
    <Provider store={Store}>
   <Router>
<MainHomePage/>
    <Routes>
      <Route path='/nonadminpage' element={<NonAdminPage/>}/>
      <Route path='/adminpage' element={<AdminPage/>}/>
      <Route path='/loginpage' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/footwear' element={<Footwear/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/apparels' element={<Apparel/>}/>
      <Route path='/personal' element={<Personal/>}/>
      <Route path='/allproducts' element={<Allproducts/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/adminpage' element={<AdminPage/>}/>
      <Route path='/modify' element={<Modify/>}/>
      <Route path='/deleateproduct' element={<DeleateProduct/>}/>
      <Route path='/selectedsearchresult/:searchProductId' element={<SelectedSearchResult />} />
      <Route path='/nonadminselectedsearchresult/:searchProductId' element={<NonAdminsearchresult />} />
    </Routes>
   </Router>
   </Provider>
  )
}

export default App;
