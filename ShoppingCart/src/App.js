import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './components/Cart.css'

function App() {
  return (
    <>
      <Header />

      <Main />

        <div className='cart-container'>
            <Cart />
        </div>

      <Footer />

    </>
  );
}

export default App;
