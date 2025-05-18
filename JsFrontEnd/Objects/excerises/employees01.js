function solve(input) {
    let employee = {};
    for (const el of input) {
       let a =  el.length;
        employee[el] = a;
    }

    for (const key in employee) {
        console.log(`Name: ${key} -- Personal Number: ${employee[key]}`)
    }

}

solve(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal']
)
