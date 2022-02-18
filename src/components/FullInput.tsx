import React, {ChangeEvent, useState} from 'react';

type FullInputProps = {
    newMessage: (title: string) => void
}

export const FullInput = (props: FullInputProps) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.newMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>x</button>
        </div>
    );
};
