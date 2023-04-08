function solve(input) {
   let items =  input.shift().split('!');
//    console.log(items);
   for (const el of input) {
    if(el === 'Go Shopping!'){
        console.log(items.join(', '))
        break;
    }

    let elements  = el.split(" ");
    let command = elements[0];

    if(command === 'Urgent'){
    let doYouHaveMatch = items.some(e => e === elements[1]);
    if(!doYouHaveMatch){
        items.unshift(elements[1]);
    }
    }else if(command === 'Unnecessary'){
        let newItems = [];
        for (let i = 0; i < items.length; i++) {
            if(items[i] === elements[1]){
              
            }else {
                newItems.push(items[i]);
            }
        }
        items = newItems;

    }else if(command === 'Correct'){
        let oldValue = elements[1];
        let newValue = elements[2];
        let newItems = [];
        for (const el of items) {
            if(el === oldValue){
                newItems.push(newValue);
            }else {
                newItems.push(el);
            }
        }
        items = newItems;
    }else if(command === 'Rearrange'){
        let newItems = [];
        let element = '';
        for (const el of items) {
            if(el === elements[1]){
                element = el
            }else {
                newItems.push(el);
            }
        }
        if(element !== ''){
            items =  newItems;
            items.push(element);
        }
    }
   }
}


solve(["Tomatoes!Potatoes!Bread",

"Unnecessary Potatoes",

"Urgent Tomatoes",

"Go Shopping!"])