window.addEventListener('load', solve);

function solve() {
    let createBtn = document.querySelector('#create-task-btn');
    createBtn.addEventListener('click',(e)=>{
        let titleValue = document.querySelector('#title').value;
        let descValue = document.querySelector('#description').value;
        let pointsValue = document.querySelector('#points').value;
        let lableValue = document.querySelector('#lable').value;
        let assaingValue = document.querySelector('#assignee').value;
        let validationCollection = [titleValue,descValue,pointsValue,assaingValue,lableValue];
        if((validationCollection.some(e=>e === ""))){
            return
        }else  {
            createElement(titleValue,descValue,pointsValue,assaingValue,lableValue)
        }

    })





    createElement(titleValue,descValue,pointsValue,assaingValue,lableValue){
        let article = document.createElement('article');
        article.id ='';
    }
}