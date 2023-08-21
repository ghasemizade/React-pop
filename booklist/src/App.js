
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react'
import Book from './components/book';
import clsx from 'clsx';



function App() {
  const [nameValue, setNameValue] = useState('')
  const [authorValue, setAuthorValue] = useState('')
  const [yearValue, setYearValue] = useState('')

  const books = [1]

  function changeName(event){
      setNameValue(event.target.value)
  }

  function changeAuthor(event){
    setAuthorValue(event.target.value)
  }

  function changeYear(event){
    setYearValue(event.target.value)
  }

  function clickButton(){
    if (nameValue && authorValue && yearValue) {
      let newBook = {
        id: books.length + 1,
        nameValue,
        authorValue,
        yearValue,
      }
    }
  }

  return (
    <>
      <Header/>
      <Main 
        changehandler={clickButton}
        changehandlername={changeName}
        changehandlerauthor={changeAuthor}
        changehandleryear={changeYear}/>

      <div className={clsx(
        "grid grid-cols-4",
        "mt-10"
      )}>
        {books.map(book => 
        <Book 
          nameValue={setNameValue}
          authorValue={setAuthorValue}
          yearValue={setYearValue}
          />)}
      </div>
    </>
  );
}

export default App;
