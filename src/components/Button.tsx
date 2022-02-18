import React from "react";

type ButtonsPropsType = {
    name: string
    callback: ()=>void
}

export const Button = (props: ButtonsPropsType) => {

    const onClickHandler = () =>{
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
};


