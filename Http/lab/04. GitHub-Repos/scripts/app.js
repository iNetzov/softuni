async function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
  let container =  document.querySelector("#res");

  try {
   let loadRepos =await fetch(BASE_URL, {method: 'GET'});
   let data = await loadRepos.text();
   console.log(data);
   container.textContent = data;
  } catch(e) {
console.log(e);
  }

}

