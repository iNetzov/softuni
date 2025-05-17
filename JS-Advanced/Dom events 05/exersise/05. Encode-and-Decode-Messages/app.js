function encodeAndDecodeMessages() {
    let textBoxes = document.querySelectorAll('div textarea');
    let textBox1 = textBoxes[0];
    let textBox2 = textBoxes[1];
    let Buttons = document.querySelectorAll('button');
    let buttonEncode = Buttons[0];
    let buttonDecode = Buttons[1];
    let oldtext =''
    buttonEncode.addEventListener('click',()=>{
        let text  = textBox1.value;
        let newText ='';
        for (let i = 0; i < text.length; i++) {
         let newChar= text[i].charCodeAt(0)+1;
         newText += String.fromCharCode(newChar);
        }
        textBox2.value = newText;
        textBox1.value ='';
    });
    buttonDecode.addEventListener('click',()=>{
        let text = textBox2.value;
        let newText='';
        for (let i = 0; i < text.length; i++) {
            let newChar = text[i].charCodeAt(0)-1 ;
            newText += String.fromCharCode(newChar);
        }
        textBox2.value = newText;
    })
}