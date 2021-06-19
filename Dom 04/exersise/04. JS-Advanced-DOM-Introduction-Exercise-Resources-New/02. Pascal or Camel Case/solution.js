function solve() {
  let textfield = document.querySelector('#text').value;
  let typeOfConvert = document.querySelector('#naming-convention').value;
  let outputArea = document.querySelector('#result');
  let textArray = textfield.split(' ');
  
  if (typeOfConvert === 'Camel Case') {
    let newStrCamelCase = textArray[0];
    for (let i = 1; i < textArray.length; i++) {
      let newIndexStr = textArray[i].toLowerCase();
      let letter = newIndexStr[0];
      letter = letter.toUpperCase();
      newIndexStr = newIndexStr.replace(newIndexStr[0], letter);
      newStrCamelCase += newIndexStr;
      outputArea.textContent = newStrCamelCase;
    }


  } else if (typeOfConvert === 'Pascal Case') {
    let newStrPascalCase = '';
    for (let i = 0; i < textArray.length; i++) {
      let newIndexStr = textArray[i].toLowerCase(); 
      let letter = newIndexStr[0];
      letter = letter.toUpperCase();
      newIndexStr = newIndexStr.replace(newIndexStr[0], letter);
      newStrPascalCase += newIndexStr;
      outputArea.textContent = newStrPascalCase;
    }


  } else {
      let errorMess = 'Error!';
      outputArea.textContent = errorMess;
  }
}