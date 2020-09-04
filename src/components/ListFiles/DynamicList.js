import React from 'react';


const Dlist = props => 
{

const addListHandler = event => {

event.preventDefault();

const newList = {id: Math.random().toString(), text:"My New List"};
props.onAddList();

};

 return <form onSubmit ='addListHandler'>
     <input type= 'text'></input>
     <input type = 'submit'></input>
 </form>

};

export default Dlist;

