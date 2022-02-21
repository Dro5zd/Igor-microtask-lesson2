import React from "react";
import {FilterType} from "../App";


type CurrentMoney = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentMoneyProps = {
    currentMoney: CurrentMoney[]
    callback: (title: FilterType)=>void
}

export const NewComponentMoney = (props: NewComponentMoneyProps) => {

    let onClickFilterHandler = (title: FilterType) => {
        props.callback(title)
    }
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
            <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            <button onClick={() => onClickFilterHandler('all')}>all</button>


        </>
    )

}