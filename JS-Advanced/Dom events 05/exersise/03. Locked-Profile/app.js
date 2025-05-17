function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
        btn.addEventListener('click', (e) => {
            let div = e.target.parentNode;
            //console.log(div);
            let isItLocked = div.children[2].checked;
            if (isItLocked !== true) {
                let innerDiv = div.querySelector('div');
                innerDiv.style.display = 'inline';
                if (e.target.textContent.includes('Show more')) {
                    e.target.textContent = 'Hide it';
                } else {
                    e.target.textContent = 'Show more';
                    innerDiv.style.display = 'none';
                }
            }
        })
    }
}