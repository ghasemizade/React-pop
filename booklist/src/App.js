
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
  
  let books = [
    {nameValue: "unconsciousness", authorValue: "mohammadi", yearValue: '1973'},
    {nameValue: "richdad poordad", authorValue: "kiyosaki", yearValue: '1997'},
    {nameValue: "think and grow rich", authorValue: "napoleon hill", yearValue: '1937'},
  ]
  const [newBooks, setNewBook] = useState(books)
  
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
    
    // console.log(nameValue);
    if (nameValue && authorValue && yearValue) {
      let newBook = {
        nameValue,
        authorValue,
        yearValue,
      }
      setNewBook([...books, newBook])
      setNameValue('')
      setAuthorValue('')
      setYearValue('')
    }
  }
  

  return (
    <>
      <Header/>
      <Main 
        changehandlername={changeName}
        changehandlerauthor={changeAuthor}
        changehandleryear={changeYear}
        changehandler={clickButton}/>

      <div className={clsx(
        "grid grid-cols-3 gap-5",
        "mt-10"
      )}>
        {books.map((index) => 
        <Book 
          nameValue={index.nameValue}
          authorValue={index.authorValue}
          yearValue={index.yearValue}
          />)}
      </div>
    </>
  );
}

export default App;
