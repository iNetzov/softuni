function asyncDemo(){
    console.log('first');
    setTimeout(()=>{
        console.log('setTimeout');
    },1500);
    console.log('second')
}

asyncDemo();