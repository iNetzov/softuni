function extractText() {
   let collection =  document.querySelectorAll(`#items li`);
   collection = [...collection];
   let textArea = document.querySelector('#result');
   for (const e of collection) {
    textArea.value += e.textContent + '\n';
   }
}