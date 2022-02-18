import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";

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


    return (
        <div className={"App"}>
            <FullInput newMessage={newMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}

            <Button name='MyYoutubeChanel-1'/>
            <Button name='MyYoutubeChanel-2'/>

        </div>
    );
}

export default App;
