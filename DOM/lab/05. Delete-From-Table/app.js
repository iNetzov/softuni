function deleteByEmail() {
    let [...tableRow]  = document.querySelectorAll('tbody tr');
    let text =  document.querySelector(`input[type ="text"]`).value.trim();

    for (const e of tableRow) {
        let children  = e.children[1];
        let isItForRemove = false;

            if(children.textContent === text){
                e.remove();
                document.querySelector('#result').textContent = 'Deleted.'
            }else{
                document.querySelector('#result').textContent = 'Not found.'
            }
        }
}



// function deleteByEmail() {
//     let input = document.getElementsByName('email')[0].value.trim();
//     let trs = document.getElementsByTagName('tr');
//     let trToBeDeleted = '';
//     let resultElement = document.getElementById('result');

//     for (let tr of trs) {
//         let td = tr.children[1];
//         if(td.textContent === input){
//             trToBeDeleted = tr;
//             resultElement.innerText = 'Deleted.';
//             trToBeDeleted.parentNode.removeChild(trToBeDeleted);
//             return;
//         }
//     }

//    resultElement.textContent = 'Not found.'
// }