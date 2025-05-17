function solve(...params) {
    let ocur = {};
    let result = [];
    params.forEach(el => {
        let type = typeof (el);
        result.push(`${type} : ${el}`)
        ocur[type] = ocur[type] !== undefined ? ocur[type]++ : 1;
    });
    Object.keys(ocur)
    .sort((a,b)=>ocur[b]-ocur[a])
    .forEach(key => result.push(`${key} = ${ocur[key]}`));
    return result.join('\n');
}