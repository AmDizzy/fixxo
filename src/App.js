import './assets/css/App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/products' element={<ProductDetailsView />} />
        <Route path='/products/:name' element={<ProductDetailsView />} />
        <Route path='/contacts' element={<ContactsView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
