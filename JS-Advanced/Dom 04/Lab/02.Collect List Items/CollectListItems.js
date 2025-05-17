function extractText() {
   let list =  document.querySelector('#items');
   let textArea = document.querySelector('textarea');
   textArea.value = list.textContent;
}