import { useState } from "react";
export default function KillCounter(){
    const [count, setCount] = useState(0);

    const increaseCountClickHandler = () => {
        setCount(count + 1 );
    }
    if(count > 10) {
         return (
            <>
            <h2>This is form 10</h2>
            <div>{count}</div>
            </>
        );
    }

    return (
        <>
        <h2>KllCounter</h2>
        <div>{count}</div>
        {count > 3 ? <button>Show This button for 3 and above</button> : <a>NO button YET!</a>}
        <button onClick={increaseCountClickHandler}>kill it</button>
        </>
    );
}