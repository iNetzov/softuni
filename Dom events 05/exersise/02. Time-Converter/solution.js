function attachEventsListeners() {
    let buttonList = document.querySelectorAll('input[type = button]');
    //console.log(buttonList);
    for (const button of buttonList) {
        button.addEventListener('click', onClick);
    }


    function onClick(ev) {
        let currentButton = ev.target.parentNode
        let check = currentButton.children[0].textContent;
        let dTextBoxValue = document.querySelector('#days');
        let hTextBoxValue = document.querySelector('#hours');
        let mTextBoxValue = document.querySelector('#minutes');
        let sTextBoxValue = document.querySelector('#seconds');

        if (check === 'Days: ') {
            let days = Number(dTextBoxValue.value);
            let hours = days * 24;
            let minutes = hours * 60;
            let seconds = minutes * 60;
            hTextBoxValue.value = hours;
            mTextBoxValue.value = minutes;
            sTextBoxValue.value = seconds;

        } else if (check === 'Hours: ') {
            let hours = Number(hTextBoxValue.value);
            let days = hours / 24;
            let minutes = hours * 60;
            let seconds = minutes * 60;
            dTextBoxValue.value = days;
            mTextBoxValue.value = minutes;
            sTextBoxValue.value = seconds;
        } else if (check === 'Minutes: ') {
            let minutes = Number(mTextBoxValue.value);
            let hours = minutes / 60;
            let days = hours / 24;
            let seconds = minutes * 60
            hTextBoxValue.value = hours;
            dTextBoxValue.value = days;
            sTextBoxValue.value = seconds;
        } else if (check === 'Seconds: ') {
            let seconds = Number(sTextBoxValue.value);
            let minutes = seconds / 60;
            let hours = minutes / 60;
            let days = hours / 24;
            mTextBoxValue.value = minutes;
            hTextBoxValue.value = hours;
            dTextBoxValue.value = days;
        }
    }
}