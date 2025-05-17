function calculator() {
    let first;
    let second;
    let resultElement ;
        return {
            init:(f1,f2,result) => {
                first = document.querySelector(f1);
                second = document.querySelector(f2);
                resultElement = document.querySelector(result) 
            },
            add: ()=> {
                resultElement.value = Number(first.value)+Number(second.value);
            },
            subtract:() =>{
                resultElement.value = Number(first.value) - Number(second.value);
            }
        }
    }
    




