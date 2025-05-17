
//NOT REFACTTOR WAY
function oldloadCharacter() {

    let baseUrl = 'http://swapi.dev/api';

    let prommise = fetch(`${baseUrl}/people/1`);
    console.log(prommise);
    prommise.then((responce) => {
        //  console.log(responce);
        responce.json()
            .then((character) => {
                console.log(character)
            }).catch((error=>{
                console.log(`rejected: ${error}`);
            }))
    })
}

//REFACTOR WAY 
function loadCharacter() {
    let baseUrl = 'http://swapi.dev/api';

    fetch(`${baseUrl}/people/1`)
        .then(res => res.json())
        .then(char => {
            console.log(char)
        })
        .catch((error=>{
            console.log(`rejected: ${error}`);
        }))

}

document.getElementById('loadChar').addEventListener('click', loadCharacter);


