import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {

    let [message, setMessage] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message3'}
    ])

    let addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}
        </div>
    );
}

export default App;
