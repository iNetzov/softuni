async function loadRepos() {
	let username = document.querySelector('#username').value;
	let BASE_URL = `https://api.github.com/users/${username}/repos`;

	let container = document.querySelector('#repos');

	try{
	let response =await fetch(BASE_URL,{method:"GET"})
	let responseData = await response.json();
	// console.log(responseData);
	for (const e of responseData) {
		let liE = document.createElement('li')
		liE.textContent	= e.full_name
		container.appendChild(liE);
	}
	} catch(e) {
		console.log(e);
	}

}