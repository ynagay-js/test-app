import React, { useState } from 'react';

function App() {

 const [likes, setLikes] = useState(5);
 const [value, setValue] = useState('Input text here');
 console.log(likes);

 function plus() {
  setLikes(likes + 1);
 }

 function minus() {
  setLikes(likes - 1);
 }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <input type='text' value={value} onChange={event => setValue(event.target.value) }></input>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      
    </div>
  );
}

export default App;
