import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
import Mainproduct from './components/Mainproduct';


function App() {
  return (
    <>
      <Routes>

        <Route 
          path="/"
          element={<Home/>} />
          
        <Route 
          path="/product"
          element={<Product/>} />
        <Route 
          path="/product/:productId"
          element={<Mainproduct/>} />

        <Route 
          path="/contact"
          element={<Contact/>} />

        <Route 
          path="/about"
          element={<About/>} />

      </Routes>
    </>
  );
}

export default App;
