
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';



function App() {
  return (
    <>
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
        </Routes>


      </div>
    </>
  );
}

export default App;
