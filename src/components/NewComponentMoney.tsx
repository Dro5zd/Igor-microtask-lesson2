import React from "react";


type CurrentMoney = {
    banknote: string
    nominal: number
    number: string
}


type NewComponentMoneyProps = {
    currentMoney: CurrentMoney[]
    callback: (title: FilterType) => void
}

export const NewComponentMoney = (props: NewComponentMoneyProps) => {

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
            <button onClick={() => props.callback('ruble')}>ruble</button>
            <button onClick={() => props.callback('dollar')}>dollar</button>
            <button onClick={() => props.callback('all')}>all</button>


        </>
    )

}