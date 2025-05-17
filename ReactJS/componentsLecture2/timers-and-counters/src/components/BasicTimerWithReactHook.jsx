import { useState } from "react";
export default function BasicTimerWithReactHook(){ 
    let timerStartingValue = 0 ;
    const [time,setTime] = useState(timerStartingValue)
    setTimeout(()=>{
    setTime(time + 1);
},1000);
    return(
        <>
            <div>
                <h2> Basic Timer!</h2>
                <div>{time}</div>
                
                <hr></hr>
            </div>

        
        </>
    );
}