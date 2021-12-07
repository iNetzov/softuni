
    let button = document.getElementById('profileBtn');
    let hiddenDiv = document.getElementById('hiddenFields');
    button.addEventListener('click',(e)=>{
        console.log("hi")

        if (e.currentTarget.textContent == 'Show More'){
            console.log("hi 1")
            document.getElementById('hiddenFields').style.display="inline"

            document.getElementById('profileBtn').textContent = 'Hide'
        }
        else if (e.currentTarget.textContent == 'Hide'){
            console.log("hi 2")
            document.getElementById('hiddenFields').style.display="none"

            document.getElementById('profileBtn').textContent = 'Show More'
        }
    })
