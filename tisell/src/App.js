import './App.css';
import clsx from 'clsx'
import Book from './components/Book';

function App() {
  return (
    <div className={clsx(
      "flex justify-center items-center",
      "min-h-screen"
    )}>

      <Book />



    </div>
  );
}

export default App;
