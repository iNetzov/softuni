import { useEffect, useState } from "react";
export default function Timer() {
    const [isManual, setIsManual] = useState(false);

    const [time, setTime] = useState(() => {
        console.log('ONLY ONCE')

        return new Date().getSeconds();
    });

    useEffect(() => {
        if (!isManual) {

            setTimeout(() => {
                setTime(seconds => seconds + 1)
            }, 1000);

        }else {
            setIsManual(false)
        }
    },[time]);


    const addTimeHandler = () => {
        setTime(seconds => seconds + 10)
        setIsManual(true);
    }

    return (
        <>
            <h4>Hello FROM TIMER</h4>
            <div>{time}</div>
            <button onClick={addTimeHandler}>add time</button>
        </>)
}