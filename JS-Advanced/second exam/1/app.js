window.addEventListener('load', solve);

function solve() {
    let addButton = document.querySelector('#add');

    let modelfield = document.querySelector('#model');
    let yearfield = document.querySelector('#year');
    let descfield = document.querySelector('#description');
    let pricefield = document.querySelector('#price');

    //item to append  = furniture-list
    let itemToAppend = document.querySelector('#furniture-list');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();


        if (yearfield.value === '' || yearfield.value === null){
            window.alert('year');
            return
        } 



        if (pricefield.value === '' || pricefield.value === null){
            window.alert('price');
            return
        } 



        if (descfield.value === '' || descfield.value === null) {
            window.alert('desc');
            return
        }
        if (modelfield.value === '' || modelfield.value === null) {
            window.alert('model');
            return
        }
        if (Number(yearfield.value) > 0 && Number(pricefield.value) > 0) {
            
        }else{
            window.alert('positive');
            return
        }

        let tr = document.createElement('tr');
        tr.classList.add('info');

        let tdModel = document.createElement('td');
        tdModel.textContent = modelfield.value;

        let tdPrice = document.createElement('td');
        tdPrice.textContent = Number(pricefield.value).toFixed(2);

        let tdBtn = document.createElement('td');
        let buttonInfo = document.createElement('button');
        buttonInfo.classList.add('moreBtn');
        buttonInfo.textContent = 'More Info';

        let buttonBuy = document.createElement('button');
        buttonBuy.classList.add('buyBtn');
        buttonBuy.textContent = 'Buy it';

        let trHide = document.createElement('tr');
        trHide.classList.add('hide');
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearfield.value}`
        let tdDesc = document.createElement('td');
        tdDesc.textContent = `Description: ${descfield.value}`
        tdDesc.setAttribute('colspan', '3')

        tdBtn.appendChild(buttonInfo);
        tdBtn.appendChild(buttonBuy);
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDesc);


        tr.appendChild(tdModel);
        tr.appendChild((tdPrice));
        tr.appendChild(tdBtn);
        tr.appendChild(trHide);
        itemToAppend.appendChild(tr);

        modelfield.value = ''
        yearfield.value = ''
        descfield.value = ''
        pricefield.value = ''
    })

    itemToAppend.addEventListener('click', (e) => {
        let clicked = e.target.textContent;

        if (clicked === 'Buy it') {
            let totalPrice = document.querySelector('.total-price')
            let parent = e.target.parentNode.parentNode;
            let price = Number(parent.childNodes[1].textContent)
            price = Number(price.toFixed(2));
            totalPrice.textContent = Number(totalPrice.textContent) + price
            let bigParent = e.target.parentNode.parentNode.parentNode;
            bigParent.removeChild(parent)
        }
        if (clicked === 'More Info') {
            e.target.textContent = 'Less Info';
            let parent = e.target.parentNode.parentNode;
            let hiddenItem = parent.childNodes[3];
            console.log(parent);
            hiddenItem.setAttribute('style', 'display: contents')
        }
        if (clicked === 'Less Info') {
            e.target.textContent = 'More Info';
            let parent = e.target.parentNode.parentNode;
            let hiddenItem = parent.childNodes[3];
            console.log(parent);
            hiddenItem.setAttribute('style', 'display: none')
        }
    })
}