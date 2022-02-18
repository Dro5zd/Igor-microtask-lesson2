import React from "react";

type ButtonsPropsType = {
    name: string
}

export const Button = (props: ButtonsPropsType) => {
    return <button>{props.name}</button>
};


