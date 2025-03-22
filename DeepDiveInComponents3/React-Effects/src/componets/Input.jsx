import { useEffect, useState } from "react";

export default function Input() {
    const [state, setState] = useState(true);


    //Basic use effect
    useEffect(() => {
        console.log("hello")

    })

    //One time on MOunt only, becouse of the empty array! second paramenter for useEfect
    useEffect(() => {
console.log('Only Once! when mounted!')
    },[])







    const buttonClickHandler = () => {
        console.log('Button clicked');
        //Toggle state:
        // setState(!state);               //NOT THIS WAY!
        setState((currentState)=> !currentState);         //THIS WAY use updater function when creating state derivative
    }
    return (
        <>
            <h3>Input components</h3>
            <input type="text" />
            <button onClick={buttonClickHandler} >Update</button>
        </>
    );
}