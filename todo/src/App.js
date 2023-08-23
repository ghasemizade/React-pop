import clsx from 'clsx';
import Header from './components/Header';
import Main from './components/Main';
import Todo from './components/Todo';

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className={clsx(
        "flex justify-center items-center",
        "mt-20"
      )}>
        <Todo />
      </div>
    </>
  );
}

export default App;
