function solve(input) {
    let phoneBook = {};
    for (const el of input) {
        let [name, phone]  =  el.split(" ");
        phoneBook[name] = phone;
    }
    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
        }
    }

solve([
    'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'
])