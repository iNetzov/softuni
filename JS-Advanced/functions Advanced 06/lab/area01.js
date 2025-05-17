function solve(area, vol, input) {
    let cordinateArr = JSON.parse(input);
    let resultArr = [];
    for (const cordinat of cordinateArr) {

        let a = ({
            area: area.call(cordinat),
            volume: vol.call(cordinat),
        });
        resultArr.push(a);
    }
    return resultArr;

}
