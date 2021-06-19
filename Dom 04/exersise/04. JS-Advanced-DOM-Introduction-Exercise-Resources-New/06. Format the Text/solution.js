function solve() {
  let inputArea = document.querySelector('#input');
  let outputArea = document.querySelector('#output');
  let inputText = inputArea.value;
  let textArray = inputText.split('.').filter(x => x !== '').map(x => x + '.');
  //console.log(textArray);
  letParRoof = Math.ceil(textArray.length / 3);
  for (let index = 0; index < letParRoof; index++) {
    outputArea.innerHTML += `<p>${textArray.slice(0, 3).join('')}</p>`;

  }
}