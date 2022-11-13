import React from 'react'
import './assets/css/App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import { ProductProvider } from './contexts/ProductContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'



function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/products' element={<ProductsView />} />
            <Route path='/products/:id' element={<ProductDetailsView />} />
            <Route path='/contacts' element={<ContactsView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
