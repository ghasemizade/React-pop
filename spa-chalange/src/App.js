import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <>
      <Routes>

        <Route 
          path="/"
          element={<Home/>} />
          
        <Route 
          path="/product"
          element={<About/>} />
        
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
