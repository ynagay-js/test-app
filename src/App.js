import React, { useState } from 'react';
import Counter from './components/Counter';
import './styles/App.css'
import PostItem from './components/PostItem';


function App() {

 const [value, setValue] = useState('Input text here');


  return (
    <div className='App'>
      <h2>{value}</h2>
      <input type='text' value={value} onChange={event => setValue(event.target.value) }></input>
      <Counter/>
      <PostItem post={{id: 1, title: "JavaScript", description: "Javascript - язык программирования"}}/>
    </div>
  );
}

export default App;
