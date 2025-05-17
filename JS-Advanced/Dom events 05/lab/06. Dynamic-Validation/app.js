function validate() {
    let emailBox = document.querySelector('#email');
    //onsole.log(emailBox);
    emailBox.addEventListener('change',(ev)=>{const email =  ev.target.value;
        const isitTrue = /^[a-z]+@[a-z]+\.[a-z]+$/.test(email);
        if( /^[a-z]+@[a-z]+\.[a-z]+$/.test(email)){
        ev.target.className = '';
        }else {
        ev.target.className = 'error';
        }
    })
}