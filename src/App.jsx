import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast("Merhaba, Burak",{position: "top-center",});

  useEffect(()=>{
    notify()
 },[])
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <div className="App">
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
        <ToastContainer position="top-center" />
      </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
