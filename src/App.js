import React, {useState} from 'react';
import './App.css';
import List from './components/ListFiles/List'
import Dlist from './components/ListFiles/DynamicList'

const App = () => {

  const [listArray, setListArray] = setState([
    {id: "l1" , text:"First" },
  {id: "l2" , text:"Second" },
  {id: "l3" , text:"third" }
]);





const addNewList = (newList) => {
setListArray(listArray.concat(newList)); 

};

  return (
    <div className="App">
     
      <h1>Course</h1>
      <Dlist onAddList = {addNewList}></Dlist>
      <List sillys = {ListArray}/>
    
    </div>
  );
}

export default App;
