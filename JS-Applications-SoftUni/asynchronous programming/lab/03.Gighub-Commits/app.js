function loadCommits() {
    let username = document.querySelector('#username').value;
    let repository = document.querySelector('#repo').value;
    let basicUrl = `https://api.github.com/repos/${username}/${repository}/commits`
    let commitList = document.querySelector('#commits')

    fetch(basicUrl)
        .then(responce => responce.json())
        .then(res => {
            for (const r of res) {
                let name  = r.commit.author.name
                let message  = r.commit.message
                let finalM =`${name}:${message}`;
              let li = document.createElement('li');
              li.textContent = finalM;
              commitList.appendChild(li)
            }
        }).catch(er=>{
            let li = document.createElement('li');
            li.textContent = `Error: ${er}(Not Found)`
        })

}