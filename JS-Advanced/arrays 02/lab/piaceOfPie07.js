function solve(array,elementOne,elementTwo){
    let indexOne = array.indexOf(elementOne);
    let indexTwo = array.indexOf(elementTwo) +1;
    let outputArray =  array.slice(indexOne,indexTwo);
    return outputArray;

}

console.log(solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie','Lemon Meringue Pie', 'Sugar Cream Pie']
 , 'Key Lime Pie', 'Lemon Meringue Pie'));