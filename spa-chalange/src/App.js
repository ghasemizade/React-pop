import './App.css';
import { useRoutes } from 'react-router-dom';
import router from './routes';


function App() {

  let routers = useRoutes(router)

  return (
    <>
      {routers}
    </>
  );
}

export default App;
