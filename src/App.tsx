import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {

    let [message, setMessage] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message3'}
    ])

    const newMessage = (title: string) => {
        let addMessage = {message: title}
        setMessage([addMessage, ...message])
    }

    const myFirstSubscriber = () => {
        console.log(`Hello, I'm Andrii`)
    }

    const mySecondSubscriber = () => {
        console.log(`Hello, I'm Ivan`)
    }

    return (
        <div className={"App"}>
            <FullInput newMessage={newMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}

            <button onClick={myFirstSubscriber}>MyYoutubeChanel-1</button>
            <button onClick={mySecondSubscriber}>MyYoutubeChanel-2</button>
        </div>
    );
}

export default App;
