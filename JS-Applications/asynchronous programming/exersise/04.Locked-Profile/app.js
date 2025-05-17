function lockedProfile() {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    (async () => {
        let profileRequest = await fetch(url);
        let profiles = await profileRequest.json();
       // console.log(profiles);
        let mainSection = document.querySelector('#main');
        mainSection.innerHTML = '';
        Object.keys(profiles).forEach((key,i)=>{
            let profile = profiles[key];
            let htmlProfile = createHtmL(i+1,profile.username,profile.email,profile.age);
            mainSection.appendChild(htmlProfile);
        })
    })();
}

//async function
//(async()=>{
//let profileRequest = await fetch(url);
//let profiles = await profileRequest.json();
//})


function createHtmL(userIndex,username,email,age) {
    let profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');
    let profileImg = document.createElement('img');
    profileImg.src = (`./iconProfile2.png`);
    profileImg.classList.add('userIcon');
    let lockLable = document.createElement('label');
    lockLable.textContent = 'Lock';
    let lockRadio = document.createElement('input');
    lockRadio.type = 'radio';
    lockRadio.name = `user${userIndex}Locked`
    lockRadio.value = 'lock';
    lockRadio.checked = true;

    let unlockLable = document.createElement('label');
    unlockLable.textContent = 'Unlock';
    let unlockRadio = document.createElement('input');
    unlockRadio.type = 'radio';
    unlockRadio.name = `user${userIndex}Locked`
    unlockRadio.value = 'unlock';
    let br = document.createElement('br');
    let hr = document.createElement('hr');

    let lableUsername = document.createElement('label');
    lableUsername.textContent = 'Username';
    let usernameInput = document.createElement('input');
    usernameInput.name = `user${userIndex}Username`;
    usernameInput.value = username;
    usernameInput.readOnly = true;
    usernameInput.disabled = true;

    let hiddenFieldsDiv = document.createElement('div');
    hiddenFieldsDiv.id = `user${userIndex}HiddenFields`;
    let hiddenFieldsHr = document.createElement('hr');

    let emailLable = document.createElement('label');
    emailLable.textContent = 'Email:'
    let emailInput = document.createElement('input');
    emailInput.type = `email`;
    emailInput.name = `user${userIndex}Email`;
    emailInput.value = email;
    emailInput.readOnly= true;
    emailInput.disabled = true;

    let ageLable = document.createElement('label');
    ageLable.textContent = 'Age:'
    let ageInput = document.createElement('input');
    ageInput.name = `user${userIndex}Age`;
    ageInput.type = `email`;
    ageInput.value = age;
    ageInput.readOnly= true;
    ageInput.disabled = true;
    


    hiddenFieldsDiv.appendChild(hiddenFieldsHr);
    hiddenFieldsDiv.appendChild(emailLable);
    hiddenFieldsDiv.appendChild(emailInput);
    hiddenFieldsDiv.appendChild(ageLable);
    hiddenFieldsDiv.appendChild(ageInput);

    let showMoreButton = document.createElement('button');
    showMoreButton.textContent = 'show More';
    showMoreButton.addEventListener('click',showHiddenInfo);

    profileDiv.appendChild(profileImg);
    profileDiv.appendChild(lockLable);
    profileDiv.appendChild(lockRadio);
    profileDiv.appendChild(unlockLable);
    profileDiv.appendChild(unlockRadio);
    profileDiv.appendChild(br);
    profileDiv.appendChild(hr);
    profileDiv.appendChild(lableUsername);
    profileDiv.appendChild(usernameInput);
    profileDiv.appendChild(hiddenFieldsDiv);
    profileDiv.appendChild(showMoreButton);
    return profileDiv;
}

function showHiddenInfo(e){
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


}