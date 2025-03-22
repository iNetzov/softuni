import { useEffect, useState } from "react";

export default function Input() {
    const [state, setState] = useState(true);
    const [text,setText] = useState('');


    //Basic use effectß
    useEffect(() => {
        console.log("ON RENDER")

    })

    //One time on MOunt only, becouse of the empty array! second paramenter for useEfect
    useEffect(() => {
console.log('Only Once! when mounted!')
    },[])

    //On input change activate only then the useEffect
    useEffect(() =>{ 
        console.log('Hook on input change ONLY')
    },[text])

// on unmount
useEffect(()=> {
    //clean up factory
return()=> {
    console.log('on UNmount');
};
},[]);





    const buttonClickHandler = () => {
        console.log('Button clicked');
        //Toggle state:
        // setState(!state);               //NOT THIS WAY!
        setState((currentState)=> !currentState);         //THIS WAY use updater function when creating state derivative
    }
    const inputChangeHandler =(e) => {
        setText(e.target.value)
        console.log('State Changed from INPUT:')
    }
    return (
        <>
            <h3>Input components</h3>
            <input type="text" onChange={inputChangeHandler} />
            <button onClick={buttonClickHandler} >Update</button>
        </>
    );
}