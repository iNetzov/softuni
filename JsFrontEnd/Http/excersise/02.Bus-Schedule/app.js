function solve() {
    let infoBoard = document.querySelector('.info');
    let departButton = document.querySelector('#depart');
    let arriveButton = document.querySelector('#arrive');
    let stopToArrive  = ''; 
    let URI = '';
    async function depart() {
        if (infoBoard.textContent === 'Not Connected') {
            URI = 'depot'
        }

        let BASE_URL = `http://localhost:3030/jsonstore/bus/schedule/${URI}`

        try {
            let req = await fetch(BASE_URL, { method: 'GET' });
            let data = await req.json();
            
            infoBoard.textContent = `Next stop ${data.name}`;
            stopToArrive = data.name;
            URI = data.next;
            arriveButton.removeAttribute('disabled');
            departButton.setAttribute('disabled','True');  
        } catch(e) {
            infoBoard.textContent = 'Error'
            arriveButton.setAttribute('disabled','True');
            departButton.setAttribute('disabled','True');
        }
    }

    async function arrive() {
       infoBoard.textContent = `Arriving at ${stopToArrive}`
       arriveButton.setAttribute('disabled','True');
        departButton.removeAttribute('disabled'); 
    }

    return {
        depart,
        arrive
    };
}

let result = solve();