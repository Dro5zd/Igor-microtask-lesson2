import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";
import {NewComponent} from "./components/NewComponent";

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

    const ButtonFoo1 = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }

    const StupidButton = () => {
        console.log('Im Stupid Button')
    }

/// Микротаска UseState
//     let [a, setA] = useState(1)
//
//     const onclickPlusHandler = () => {
//         setA(++a)
//     }
//     const onclickMinusHandler = () => {
//         setA(--a)
//     }
//
//     const onclick0Handler = () =>{
//         setA(a=0)
//     }

    const students = [
        {id: 1, name:'Senya', age:32},
        {id: 2, name:'Venya', age:42},
        {id: 3, name:'Jhenya', age:12},
        {id: 4, name:'Benya', age:25}
    ]


    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    return (

        <div className={"App"}>
            <ul>
                {money.map((objFromMoneyArr) => {
                    return (
                        <li>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>





            <FullInput newMessage={newMessage}/>
            {message.map((el, index) => <div key={index}>{el.message}</div>)}

            <Button name='MyYoutubeChanel-1' callback={() => ButtonFoo1('Im Vasya')}/>
            <Button name='MyYoutubeChanel-2' callback={() => ButtonFoo2('Im Petya')}/>
            <Button name='Stupid Button' callback={StupidButton}/>


            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onclickPlusHandler}> +++</button>*/}
            {/*<button onClick={onclick0Handler}> 0 </button>*/}
            {/*<button onClick={onclickMinusHandler}> --- </button>*/}


            <NewComponent students={students}/>
        </div>
    );
}

export default App;
