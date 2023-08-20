import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Stashbook from './components/Stashbook';
import { useState } from 'react'


function App() {
  const [nameValue, setNameValue] = useState('')
  const [authorValue, setAuthorValue] = useState('')
  const [yearValue, setYearValue] = useState('')

  function changeName(event){
      setNameValue(event.target.value)
  }

  function changeAuthor(event){
    setAuthorValue(event.target.value)
}

function changeYear(event){
  setYearValue(event.target.value)
}

function changeButton(event){

}

  return (
    <>
      <Header/>
      <Main 
        changehandler={changeButton}
        changehandlername={changeName}
        changehandlerauthor={changeAuthor}
        changehandleryear={changeYear}/>
      <p>{nameValue}</p>
      <p>{authorValue}</p>
      <p>{yearValue}</p>
      <Stashbook/>
    </>
  );
}

export default App;
