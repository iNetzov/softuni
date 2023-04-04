async function loadCommits() {
let username = document.querySelector("#username");
let repo = document.querySelector("#repo");


let  BASE_URL =`https://api.github.com/repos/${username.value}/${repo.value}/commits`;

let commits = document.getElementById('commits');


// WITH PROMISES
// let call   = fetch(BASE_URL, {method:'GET'})
// call
//     .then((res) => {
//         return res.json();
//     })
//         .then((data) => {
//             console.log(data);
//         data
//             .forEach(({commit}) => {
//                 const li = document.createElement('li');
//                 li.textContent = `${commit.author.name}: ${commit.message}`
//             commits.appendChild(li);
//         });
//     })
//             .catch((e) => {
//         console.log(e);
//     })

// WIth await
try {
    let call   = await fetch(BASE_URL, {method:'GET'})
    let data = await call.json();
    console.log(data);
    
} catch(e) {
    console.log(e);
}
}