function validate() {
    let textFild = document.querySelector('#email');
    let regexValidate =/([a-z])+@([a-z])+([.])+([a-z])+/;
    textFild.addEventListener('change',()=>{
        if(!regexValidate.test(textFild.value)){
         textFild.classList.add('error');   
        }else{
            textFild.removeAttribute('class');
        }
    })
}