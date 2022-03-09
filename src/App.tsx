import React, {useState} from 'react';
import './App.css';
import {NewComponentMoney} from "./components/NewComponentMoney";

export type FilterType = 'all' | "ruble" | 'dollar'


export function App() {

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


    let [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money

    if (filter === 'ruble') {
        currentMoney = money.filter(f => f.banknote === 'ruble')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter(f => f.banknote === 'dollar')
    }

    return (
        <NewComponentMoney currentMoney={currentMoney} callback={setFilter}/>

        // <>
        //     <ul>
        //         {currentMoney.map((objFromMoneyArr, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span> {objFromMoneyArr.banknote}</span>
        //                     <span> {objFromMoneyArr.nominal}</span>
        //                     <span> {objFromMoneyArr.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
        //     <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
        //     <button onClick={() => onClickFilterHandler('all')}>all</button>
        //
        //
        // </>

    )
}
