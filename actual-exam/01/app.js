function solve(input){
    let number   = Number(input.shift());
    let collection = {};
    
    for (let i = 0; i < number; i++) {
        let [name,taskId,taskName,taskStatus,points] = input[i].split(':');
    
        if(!collection.hasOwnProperty(name)){
            collection[name] = [{name:taskName,taskId:taskId,status:taskStatus,points:points}]
        }else {
            collection[name].push({name:taskName,taskId:taskId,status:taskStatus,points:points})
        }
    }
    input = input.slice(number);
    for (const el of input) {
       let elements =  el.split(':');
       let command = elements.shift();

       if(command === 'Add New') {
        let [assignee,taskId,title,status,estimatedPoints] = elements;
        if(collection.hasOwnProperty(assignee)){
            collection[assignee].push({name:title,taskId:taskId,status:status,points:estimatedPoints})
        }else {
           console.log(`Assignee ${assignee} does not exist on the board!`);
        }

       }else if (command === 'Change Status'){
       let  [assignee, taskId, newStatus] = elements
        if(collection.hasOwnProperty(assignee)){
            let collection1 = collection[assignee]
            let bool = false;
            for (const e of collection1) {
                if(e.taskId === taskId){
                    e.status = newStatus;
                    bool = true;
                } 
            }
            if(!bool){
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            }

        }else {
           console.log(`Assignee ${assignee} does not exist on the board!`);
        }

       }else if(command === 'Remove Task'){
        let[assignee, index]= elements;
        index = Number(index);
        
        if(collection.hasOwnProperty(assignee)){
            if(collection[assignee].length-1 < index ){
                console.log('Index is out of range!"');
            }else {
                collection[assignee].splice(Number(index),1);
            }
        }else {
           console.log(`Assignee ${assignee} does not exist on the board!`);
        }
       }
    }
    let total =  0 ;
    let Todo = 0;
    let inprogress = 0;
    let codeReview = 0;
    let Done = 0;
   for (const key in collection) {
    let current = collection[key];
    // console.log(current);
    for (const e of current) {
        // console.log(e);
        if(e.status === 'ToDo'){
            Todo+= Number(e.points);
        }else if(e.status ==='In Progress'){
            inprogress += Number(e.points);
        }else if(e.status === 'Code Review'){
            codeReview += Number(e.points);
        }else if(e.status === 'Done'){
            Done += Number(e.points);
        }
    }
}
let a = {name:'Todo', quantity:Todo};
let b = {name:'In Progress',quantity:inprogress }
let c = {name:'Code Review',quantity:codeReview }
let d = {name:'Done',quantity:Done}
let aa = [a,b,c,d];
aa.sort((e1,e2)=> e2.quantity-e1.quantity);
// console.log(aa);
aa.forEach(aa => {
    console.log(`${aa.name} ${aa.quantity}`)
});
}
    


solve(    [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Georgi:1',
]
);