import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Maincource from './components/Maincource';
import Cources from './components/Cources';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/cources' element={<Cources/>}/>
        <Route path='/cource/:courceId' element={<Maincource/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
