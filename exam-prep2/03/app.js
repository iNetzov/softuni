function solve() {
    let loadAllBtn = document.querySelector('#load-product');
    let addButton   = document.querySelector('#add-product');
    let updateButton = document.querySelector('#update-product');
    let BASE_URL = `http://localhost:3030/jsonstore/grocery`
    loadAllBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        document.querySelector('#tbody').innerHTML = '';

        let repsonse = await fetch(BASE_URL, { method: 'GET' });
        let data = await repsonse.json();
        console.log(data);
        for (const key in data) {
            // console.log(data[key]);
            let element = createElement(data[key].product, data[key].count, data[key].price, data[key]._id);
           let parent =  document.querySelector('#tbody');
        //    console.log(element);
           parent.appendChild(element);
        }
        function createElement(product, count, price, id) {
            // console.log(product);
            // console.log(count);
            // console.log(price);
            // console.log(id);

            let tr = document.createElement('tr');

            let nameE = document.createElement('td');
            nameE.classList.add('name');
            nameE.textContent = product;

            let countE = document.createElement('td');
            countE.classList.add('count-product');
            countE.textContent = count;
            
            
            let priceE = document.createElement('td');
            priceE.classList.add('product-price');
            priceE.textContent = price;

            let btnContainer = document.createElement('td');
            btnContainer.classList.add('btn');
            btnContainer.id = id;

            let updateButton = document.createElement('button');
            updateButton.classList.add('update');
            updateButton.textContent = 'Update';
            updateButton.addEventListener('click',(e)=> {
                document.querySelector('#product').value = product;
                document.querySelector('#count').value = count;
                document.querySelector('#price').value = price;
                document.querySelector('#update-product').disabled = false;
               let btn =  document.querySelector('#update-product')
               btn.setAttribute('idPatch',id);
            document.querySelector('#add-product').disabled = true;
            })

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', async(e)=> {
                let neededId  = e.target.parentNode.id;
                try{
                    let response = await fetch(BASE_URL+`/${neededId}`,{method:'DELETE'});
                    let data = await response.json();
                     console.log(data);
                     document.querySelector('#load-product').click();
                }catch(e){
                console.log(e);
                }
                

            })


            btnContainer.appendChild(updateButton);
            btnContainer.appendChild(deleteButton);

            tr.appendChild(nameE)
            tr.appendChild(countE)
            tr.appendChild(priceE)            
            tr.appendChild(btnContainer)
            return tr;

        }
    })

    addButton.addEventListener('click',async function load(e) {
        e.preventDefault();
        let productValue = document.querySelector('#product').value;
        let countValue = document.querySelector('#count').value;
        let priceValue = document.querySelector('#price').value;
        let newProduct = {product:productValue,count:countValue,price:priceValue};
       let config =  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        }
        let  response = await fetch(BASE_URL,config);
        let data  = await response.json();
        document.querySelector('#load-product').click();
    })

    updateButton.addEventListener('click',async(e)=> {
        let neededId = e.target.getAttribute('idPatch');
        console.log(neededId);
        let newProduct = document.querySelector('#product').value;
        let newCount = document.querySelector('#count').value;
        let newPrice = document.querySelector('#price').value;
        let newObj ={product:newProduct,count:newCount,price:newPrice,_id:neededId};
        // console.log(newObj);
        let config =  {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newObj)
        }

        let response = await fetch(BASE_URL+`/${neededId}`,config);
        let data  =await response.json();
        console.log(data);
        document.querySelector('#load-product').click();
        document.querySelector('#add-product').disabled = false;
        document.querySelector('#update-product').disabled = true;

    })


}
solve();