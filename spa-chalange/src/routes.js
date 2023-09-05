import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About/About';
import Product from './components/Product';
import Mainproduct from './components/Mainproduct';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


let router = [
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
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
  ]

  export default router