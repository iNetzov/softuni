async function getInfo() {
    let stopId = document.querySelector('#stopId');
    let stopName = document.querySelector('#stopName');
    let busesContainer = document.querySelector('#buses');
    const URI = stopId.value;
    const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/${URI}`;

    busesContainer.innerHTML = '';
    try {
        let response = await fetch(BASE_URL, { method: 'GET' });
        let data = await response.json();
        stopName.textContent = data.name
        for (const [key, value] of Object.entries(data.buses)) {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arives in ${value} minutes`;
            busesContainer.appendChild(li);
        }

    } catch (e) {
        stopName.textContent = 'Error'
        console.log(e);
    }


}