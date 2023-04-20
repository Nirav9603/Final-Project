import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './containers/home/Home';
import Shop from './containers/shop/Shop';
import About from './containers/about/About';
import Services from './containers/services/Services';
import Blog from './containers/blog/Blog';
import Contact from './containers/contact/Contact';
import Cart from './containers/cart/Cart';
import Auth from './containers/auth/Auth';
import Layout from './admin/components/Layout';
import Product from './admin/containers/Product';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={'/shop'} element={<Shop />} />
        <Route path={'/about'} exact element={<About />} />
        <Route path={'/services'} exact element={<Services />} />
        <Route path={'/blog'} exact element={<Blog />} />
        <Route path={'/contact'} exact element={<Contact />} />
        <Route path={'/auth'} exact element={<Auth />} />
        <Route path={'/cart'} exact element={<Cart />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
