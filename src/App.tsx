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

    const ButtonFoo1 = (subscriber: string)=>{
        console.log(subscriber)
    }

    const ButtonFoo2 = (subscriber: string)=>{
        console.log(subscriber)
    }

    const StupidButton = () => {
        console.log('Im Stupid Button')
    }


    return (
        <div className={"App"}>
            <FullInput newMessage={newMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}

            <Button name='MyYoutubeChanel-1' callback={()=>ButtonFoo1('Im Vasya')}/>
            <Button name='MyYoutubeChanel-2' callback={()=>ButtonFoo2 ('Im Petya')}/>
            <Button name='Stupid Button' callback={StupidButton}/>


        </div>
    );
}

export default App;
