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

    // const myFirstSubscriber = () => {
    //     console.log(`Hello, I'm Andrii`)
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log(`Hello, I'm Ivan`)
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foo1 = () => {
        console.log('100200')
    }

    const foo2 = (value: number) => {
        console.log(value)
    }

    return (
        <div className={"App"}>
            <FullInput newMessage={newMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}

            {/*<button onClick={() => onClickHandler('Andrii')}>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={() => onClickHandler('Bogdan')}>MyYoutubeChanel-2</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>


        </div>
    );
}

export default App;
