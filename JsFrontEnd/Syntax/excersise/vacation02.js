function solve(groupSize, groupType, dayOfWeek) {
    const STUDENTS = 'Students';
    const BUISNESS = 'Business';
    const REGULAR = 'Regular';

    const FRIDAY = 'Friday';
    const SATURDAY = 'Saturday';
    const SUNDAY = 'Sunday';

    let totalPrice = 0;
    if(groupType === STUDENTS){

        if (dayOfWeek === FRIDAY) {
            totalPrice = groupSize * 8.45; 
        } else if(dayOfWeek === SATURDAY) {
            totalPrice = groupSize * 9.80;
        } else if(dayOfWeek === SUNDAY) {
            totalPrice = groupSize * 10.46;
        }
        if(groupSize >= 30){
            totalPrice = totalPrice / 100
            totalPrice = totalPrice * 85;
        }

    } else if(groupType === BUISNESS) {

        if(groupSize >= 100){
         groupSize = groupSize - 10
        }
        if (dayOfWeek === FRIDAY) {
            totalPrice = groupSize * 10.90; 
        } else if(dayOfWeek === SATURDAY) {
            totalPrice = groupSize * 15.60;
        } else if(dayOfWeek === SUNDAY) {
            totalPrice = groupSize * 16;
        }
        

    } else if(groupType === REGULAR) {
        
        if (dayOfWeek === FRIDAY) {
            totalPrice = groupSize * 15; 
        } else if(dayOfWeek === SATURDAY) {
            totalPrice = groupSize * 20;
        } else if(dayOfWeek === SUNDAY) {
            totalPrice = groupSize * 22.50;
        }
        if(groupSize >= 10 && groupSize <= 20){
            totalPrice = totalPrice / 100;
            totalPrice = totalPrice * 95
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

solve(2,'Students','Saturday');