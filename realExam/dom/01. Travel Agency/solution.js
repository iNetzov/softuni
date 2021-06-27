window.addEventListener('load', solution);

function solution() {
  let fullNameFrame = document.querySelector('#fname');
  let emailFrame = document.querySelector('#email');
  let phoneFrame = document.querySelector('#phone');
  let addressFrame = document.querySelector('#address');
  let postalCodeFrame = document.querySelector('#code');
  let submitButton = document.querySelector('#submitBTN');

  ///ading eventL to subbmit button ;
  submitButton.addEventListener('click', (e) => {
    if (fullNameFrame.value.length > 0 && emailFrame.value.length > 0) {

      //crating element//
      let ul = document.querySelector('#infoPreview');
      let liFullName = document.createElement('li');
      liFullName.textContent = `Full Name: ${fullNameFrame.value}`;
      let liEmail = document.createElement('li');
      liEmail.textContent = `Email: ${emailFrame.value}`;
      let liPhone = document.createElement('li');
      liPhone.textContent = `Phone Number: ${phoneFrame.value}`;
      let liAddress = document.createElement('li');
      liAddress.textContent = `Address: ${addressFrame.value}`;
      let liPostalCode = document.createElement('li');
      liPostalCode.textContent = `Postal Code: ${postalCodeFrame.value}`;
      ul.appendChild(liFullName);
      ul.appendChild(liEmail);
      ul.appendChild(liPhone);
      ul.appendChild(liAddress);
      ul.appendChild(liPostalCode);
      //console.log(ul);
      //creating elements//

      //deleting form info
      fullNameFrame.value = '';
      emailFrame.value = '';
      phoneFrame.value = '';
      addressFrame.value = '';
      postalCodeFrame.value = '';
      //deleting form info

      //disable button Submit//
      document.querySelector('#submitBTN').disabled = true;
      //disable button submit//

      //enable buttons edit countiny;
      document.querySelector('#editBTN').disabled = false;
      document.querySelector('#continueBTN').disabled = false;

      let buttonEdit = document.querySelector('#editBTN');
      let buttonC = document.querySelector('#continueBTN');
      //adding event Listener to |ButtonEdit//
      buttonEdit.addEventListener('click', () => {
        //fullName;
        let fullNameArrays = (ul.children[0].textContent).split(': ');
        fullNameFrame.value = fullNameArrays[1];
        //fullName
        //emai
        let EmailArrays = (ul.children[1].textContent).split(': ');
        emailFrame.value = EmailArrays[1];
        //email
        //phoneNumber
        let phoneArrays = (ul.children[2].textContent).split(': ');
        phoneFrame.value = phoneArrays[1];
        //phoneNumber
        //address
        let addressArrays = (ul.children[3].textContent).split(': ');
        addressFrame.value = addressArrays[1];
        //adress
        //code
        let codeArrays = (ul.children[2].textContent).split(': ');
        postalCodeFrame.value = codeArrays[1];
        //code
        //enable/disable buttons 
        document.querySelector('#submitBTN').disabled = false;
        document.querySelector('#editBTN').disabled = true;
        document.querySelector('#continueBTN').disabled = true;
        //enable/disable buttons
        ul.innerHTML = "";
      })
      buttonC.addEventListener('click', () => {
        let blockDiv = document.querySelector('#block');
        console.log(blockDiv);
        blockDiv.innerHTML =("")
        let h3 = document.createElement('h3');
        h3.textContent =('Thank you for your reservation!');
        blockDiv.appendChild(h3);


      })




      //returning all to old fileds
      //diasbling buttons 
      //enableing buttons submit
      //deleting the form






    }








    //enable buttons edit countiny;

  })
}

