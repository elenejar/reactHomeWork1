import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';



function App() {
  const [inputValue, setInputValue] = useState("");
  const username = ['John', 'Dodo', 'Malvina'];

  return (
    <div className='App'>
      <UserInput 
      value={inputValue}        
       onChange={({target}) =>{
         if (inputValue.length < 50)
         {
          setInputValue(target.value)
         }}}/>

        <h1>{inputValue}</h1>
        <hr />
        <UserOutput username={username} />
    </div>
  );
  };
export default App;
