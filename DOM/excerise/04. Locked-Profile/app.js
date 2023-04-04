function lockedProfile() {
   let [...profileCollection] =  document.querySelectorAll('.profile');

   for (const el of profileCollection) {
        let button = el.querySelector('button');
   let radio = el.querySelector('input[type=radio]:checked');
   let [...allRadioButtons] = el.querySelectorAll('input[type=radio]');

   for (const elem of allRadioButtons) {
    elem.addEventListener('change',(e) => {
        radio.value = elem.value
    })
}
        let div = el.querySelector('div')
        radio.addEventListener('change',(e)=>{})

        button.addEventListener('click', (e)=> {
            console.log(radio);
            if(radio.value !== 'lock' && e.target.textContent === 'Show more') {
                div.style.display='inline';
                e.target.textContent = 'Hide it'
            }else if(radio.value !=='lock' && e.target.textContent === 'Hide it') {
                div.style.display="none"
                e.target.textContent = 'Show more';
            }
        })
   }

}