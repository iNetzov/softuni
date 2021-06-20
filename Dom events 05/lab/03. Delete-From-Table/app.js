
function deleteByEmail() {
    const getTextField = document.querySelector('input').value;
    const getElements = document.getElementsByTagName('tr');
    const getMessage = document.getElementById('result');
    for (const getE of getElements){
        let elValue  = getE.textContent;
    
    if(elValue.includes(getTextField)){
        getE.remove();
        getMessage.textContent = 'Deleted.';
    }
    }
    if(getMessage.textContent === 'Deleted.'){
    
    }else {
        getMessage.textContent = `${getTextField} Not found.`;
    }
    }

