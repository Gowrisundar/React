import React,{useState} from 'react';

//with hook using presentation
export default function Button() {
    const [buttonText, setButtonText] = useState('Click me, please')
    function handleClick() {
        return setButtonText("Thanks, been clicked")
    }
    return <button onClick={handleClick}>{buttonText}</button>
}