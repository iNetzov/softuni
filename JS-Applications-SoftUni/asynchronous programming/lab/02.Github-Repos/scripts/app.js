function loadRepos() {
	let dinamicUrl = document.querySelector('#username').value;
	let finalUrl = `https://api.github.com/users/${dinamicUrl}/repos`;
	let list  = document.querySelector('#repos');
	list.textContent = '';

	fetch(finalUrl)
		.then(responce => responce.json())
			.then(rep=>{
				for (const r of rep) {
					let li = document.createElement('li');
					let a = document.createElement('a');
					a.textContent = `${dinamicUrl}/${r.name}`;
					a.href = `${dinamicUrl}/${r.name}`;
					li.appendChild(a);
					list.appendChild(li);
				}
			}).catch(er=>{
				console.log('Promise rejected');
				console.log(er);
			})




}