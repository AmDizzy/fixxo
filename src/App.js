import React, {useState, useEffect} from 'react'
import './assets/css/App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import { ProductContext } from './contexts/contexts'



function App() {
  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: []
  })
  
  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})
    }
    fetchAllProducts();

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts();

  }, [setProducts])

  return (
    <>
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/products' element={<ProductsView />} />
          <Route path='/products/:name' element={<ProductDetailsView />} />
          <Route path='/contacts' element={<ContactsView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
