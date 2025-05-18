function solve (input) {
    let townCalalog = 
    {
        town:"",
        latitude:-1,
        longitude:-1
    }
    for (const e of input) {
        let [town,lat,long] = e.split(" | ")
        lat = Number(lat).toFixed(2);
        long = Number(long).toFixed(2);
        townCalalog.town = town;
        townCalalog.latitude = lat;
        townCalalog.longitude = long;
        console.log(townCalalog);
    }

}

solve(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]
)