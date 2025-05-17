function getInfo() {
    let textFiled = document.querySelector('#stopId');
    let staticUrl = `http://localhost:3030/jsonstore/bus/businfo/`
    let dinamicUrl = `${textFiled.value}`;
    let finalUrl = staticUrl + dinamicUrl;
    let stopName = document.querySelector('#stopName');
    let buses = document.querySelector('#buses');
    buses.innerHTML = "";
    fetch(finalUrl)
        .then(responce => responce.json())
        .then((r) => {
            stopName.textContent = r.name;
            for (const [key, value] of Object.entries(r.buses)) {
                let li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${value}`;
                buses.appendChild(li);
            }
        }).catch(() => {
            stopName.textContent = 'Error';
        })
        
}