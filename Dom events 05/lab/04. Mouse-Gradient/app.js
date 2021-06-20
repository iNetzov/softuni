function attachGradientEvents() {
    let hoverField = document.querySelector('#gradient-box');
    let result = document.querySelector('#result');
    hoverField.addEventListener('mouseover',(e)=>{
        console.log(e.currentTarget.offsetWidth)
        console.log(e.offsetX)
        let persent =  Math.floor((e.offsetX/e.currentTarget.offsetWidth)*100);
        result.textContent = `${persent}%`
    })
}