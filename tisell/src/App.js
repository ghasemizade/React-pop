import './App.css';
import clsx from 'clsx'
import Book from './components/Book';
import Decs from './components/Decs';

function App() {
  return (
    <div className={clsx(
      "flex justify-center items-center",
      "min-h-screen",
        "bg-[#30303036]",
        "backdrop-blur",
      )}>
      <div className={clsx(
        "container",
        "flex justify-between items-center",
        "px-40"
    )}>
      <Decs />
      <Book />
    </div>
    </div>
  );
}

export default App;
