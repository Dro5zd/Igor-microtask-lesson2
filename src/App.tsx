import React, {useState} from 'react';
import './App.css';

function App() {

  let [message, setMessage] = useState([
    {message: 'Message1'},
    {message: 'Message2'},
    {message: 'Message3'}
  ])

  return (
    <div>
        <div>
            <input />
            <button>x</button>
        </div>

      {message.map((el, index) => <div key={index}>{el.message}</div>)}

    </div>
  );
}

export default App;
