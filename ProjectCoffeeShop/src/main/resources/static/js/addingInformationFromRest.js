
const finalUrl =`http://localhost:8080/api/logs/all`;
let list = document.querySelector('#inputContainer');
console.log("hi");


fetch(finalUrl)
                .then(responce => responce.json())
                        .then(rep=>{
                            for (const r of rep) {
                                let li = document.createElement('li');
                                let a = document.createElement('a');
                                a.textContent =`Client: ${r.clientName} -- Order Id: ${r.orderId} -- Done: ${r.done} --Product: ${r.productName} -- Store: ${r.storeName}`;
                                li.classList.add('form-control', 'marginLeftInput');
                                 li.appendChild(a);
                                 list.appendChild(li);
                             }
                        }).catch(er =>{
                            console.log('Promise rejected');
                            console.log(er);
})