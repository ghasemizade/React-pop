import { Routes, Route, useRoutes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About/About';
import Product from './components/Product';
import Mainproduct from './components/Mainproduct';


function App() {

  let router = useRoutes([
    { 
      path:"/",
      element:<Home/>
    },
    {
      path:"/product",
      element:<Product/>},
    {
      path:"/product/:productId",
      element:<Mainproduct/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about/*",
      element:<About/>,
      children: [
        {path:"setting", element: <span> {`>`} setting</span>},
        {path:"dashboard", element: <span> {`>`} dashboard</span>},
      ]
    },
  ])

  return (
    <>
      {router}
    </>
  );
}

export default App;
