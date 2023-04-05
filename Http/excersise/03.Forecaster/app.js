function attachEvents() {

    document
        .querySelector('#submit')
        .addEventListener('click', async function (e) {
            let BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
            let forcast = document.querySelector('#forecast');
            forcast.style.display ='inline';
            let currentWeather = document.querySelector('#forecast>div#current>div.label');
            // console.log(currentWeather);
            try {
                let request = await fetch(BASE_URL, { method: 'GET' });
                let data = await request.json();
                // console.log(data
                let location = document.querySelector('#location');
                let obj = { code: "", name: "" }
                for (const d of data) {
                    [code, name] = Object.values(d);

                    if (location.value === name) {
                        obj.code = code;
                        obj.name = name;
                    }
                }
                if(obj.code === ""){
                    throw Error('no object');
                }

                let URI_CONDITIONS = obj.code
                let BASE_URL_CONDITIONS = `http://localhost:3030/jsonstore/forecaster/today/${URI_CONDITIONS}`;
                let BASE_URL_FUTURE = `http://localhost:3030/jsonstore/forecaster/upcoming/${URI_CONDITIONS}`;
                try{
                    let conditionsResponse = await fetch(BASE_URL_CONDITIONS,{method:"GET"});
                    let conditionsData = await conditionsResponse.json();
                    // console.log(conditionsData);

                    let futureResponse =  await fetch(BASE_URL_FUTURE,{method:'GET'});
                    let futureData = await futureResponse.json();
                    // console.log(futureData);

                    let divForcasts = document.createElement('div');
                    divForcasts.classList.add('forecasts');

                    let divConditon = document.createElement('div');
                    divConditon.classList.add('condition');
                    
                    let spanIcon = document.createElement('span');
                    spanIcon.classList.add('condition','symbol');
                    
                    let spanLocation = document.createElement('span');
                    spanLocation.classList.add('forecast-data');
                    
                    let spanTemprecure = document.createElement('span');
                    spanTemprecure.classList.add('forecast-data');
                    
                    let spanType = document.createElement('span');
                    spanType.classList.add('forecast-data');

                    if(conditionsData.forecast.condition === 'Rain'){
                        spanIcon.textContent = '☂';
                    }else if(conditionsData.forecast.condition === 'Sunny'){
                        spanIcon.textContent = '☀';
                    }else if(conditionsData.forecast.condition === 'Partly sunny'){
                        spanIcon.textContent = '⛅';
                    }else if(conditionsData.forecast.condition === 'Overcast'){
                        spanIcon.textContent = '☁';
                    } else {
                        //DONT KNOW WHAT TO DO? 
                    }
                    spanLocation.textContent = conditionsData.name;
                    spanTemprecure.textContent = `${conditionsData.forecast.low}°/${conditionsData.forecast.high}°`;
                    spanType.textContent = `${conditionsData.forecast.condition}`;

                    divForcasts.appendChild(spanIcon);

                    divConditon.appendChild(spanLocation);
                    divConditon.appendChild(spanTemprecure);
                    divConditon.appendChild(spanType);

                    divForcasts.appendChild(divConditon);


                    document.querySelector('#current').appendChild(divForcasts);
                    

                    let container  = document.createElement('div');
                    container.classList.add('forecast-info');

                    for (const d of futureData.forecast) {
                    let [conditionD,highD,lowD] = Object.values(d);
                       let element =  generateDaysAhead(conditionD,highD,lowD);
                       container.appendChild(element);  
                    }

                    let biggerContainer = document.querySelector('#upcoming');
                    biggerContainer.appendChild(container);
                   




                    function generateDaysAhead(condition, high, low) {
                        let upcommingField = document.createElement('span');
                        upcommingField.classList.add('upcoming');

                        let iconField = document.createElement('span')
                        iconField.classList.add('symbol')
                        
                        let weatherField = document.createElement('span')
                        weatherField.classList.add('forecast-data')
                        let weatherTypeField = document.createElement('span')
                        weatherTypeField.classList.add('forecast-data');
                       
                        if(condition === 'Rain'){
                            iconField.textContent = '☂';
                        }else if(condition === 'Sunny'){
                            iconField.textContent = '☀';
                        }else if(condition === 'Partly sunny'){
                            iconField.textContent = '⛅';
                        }else if(condition === 'Overcast'){
                            iconField.textContent = '☁';
                        } else {
                            //DONT KNOW WHAT TO DO? 
                        }
                    weatherField.textContent =`${low}°/${high}°`
                    weatherTypeField.textContent = condition;

                    upcommingField.appendChild(iconField);
                    upcommingField.appendChild(weatherField);
                    upcommingField.appendChild(weatherTypeField);
                   
                    return upcommingField;
                }


                } catch (e) {
                    console.log(e);
                    currentWeather.textContent = 'Error'
                }

            } catch (e) {
                currentWeather.textContent = 'Error'
            }


        })
}

attachEvents();