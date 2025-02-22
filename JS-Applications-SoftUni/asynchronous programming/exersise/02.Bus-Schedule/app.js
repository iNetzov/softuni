
function solve() {
    const departBtn = document.getElementById('depart');
    const arrivetBtn = document.getElementById('arrive');
   const banner = document.querySelector('span.info');

    let stop = {
        next : 'depot'
    };
    async function depart() {
try{
        const url = 'http://localhost:3030/jsonstore/bus/schedule/' + stop.next;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        stop = data;

        banner.textContent = `Next stop ${stop.name}`;

        departBtn.disabled = true;
        arrivetBtn.disabled = false;
    }catch{
        banner.textContent = 'Error';
        departBtn.disabled = true;
        arrivetBtn.disabled = true;
    }}

    function arrive() {
        banner.textContent = `Arraving at ${stop.name}`
        departBtn.disabled = false;
        arrivetBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();