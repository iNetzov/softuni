function solve(grade) {
        console.log(`${generateDesc(Number(grade))} (${grade.toFixed(2)})`)


        function generateDesc(grade){
            let desc = '';
            if(grade < 3.00) {
                desc = 'Fail'
            }else if(grade>= 3.00 && grade < 3.50){
                desc = 'Poor'
            }else if(grade >=3.50 && grade < 4.50){
                desc =  'Good'
        
            }else if(grade >= 4.50 && grade < 5.50){
                desc = 'Very good'
            }else if(grade >= 5.50){
                desc = 'Excellent'
            }
            return desc;
        }

    }



solve(3.33)
solve(4.50)
// solve(2.99)
// solve(2.983)