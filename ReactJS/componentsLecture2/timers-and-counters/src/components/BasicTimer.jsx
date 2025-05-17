
export default function BasicTimer(){ 
    // does not work no react hook 
    let timer = 0 ;
    setInterval(()=>{
    console.log(timer)
    timer++;
},1000);
    return(
        <>
            <div>
                <h2> Basic Timer!</h2>
                <div>{timer}</div>
            
                <hr></hr>
                <hr></hr>
                <hr></hr>
            </div>

        
        </>
    );
}