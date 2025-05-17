function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';
   let ulList = document.getElementById('res')
   fetch(url)
      .then(responce =>responce.json()).then(rep=>{
         for (const r of rep) {
            ulList.textContent += JSON.stringify(r)
         }
      })
      


}